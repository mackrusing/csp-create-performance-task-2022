// import modules
import chalk from 'chalk';
import inquirer from 'inquirer';
/******************************************************************************/
const chlkValue = chalk.bold.green;
const chlkCap = chalk.bold.yellow;
const chlkNoi = chalk.bold.magenta;
/******************************************************************************/
// value = noi / cap
// cap rate = noi / value
// noi = value * cap
// defalut values
// value: 200000
// noi: 10000
// cap: 5
// anual rent = per sq ft * sq ft
// monthly rent = anual rent / 12
// anual / cap rate = value of investment
// calculate value
const calculateValue = async () => {
  // get user input
  const response = await inquirer.prompt([
    {
      name: 'noi',
      type: 'number',
      message: "What's the property's net operating income?",
      default() {
        return 10000;
      },
    },
    {
      name: 'cap',
      type: 'number',
      message: "What's the property's cap rate?",
      default() {
        return 5;
      },
    },
  ]);
  const value = response.noi / (response.cap / 100);
  logResults(response.noi, value, response.cap);
};
// calculate cap rate
const calculateCap = async () => {
  // get user input
  const response = await inquirer.prompt([
    {
      name: 'noi',
      type: 'number',
      message: "What's the property's net operating income?",
      default() {
        return 10000;
      },
    },
    {
      name: 'value',
      type: 'number',
      message: "What's the property's value?",
      default() {
        return 200000;
      },
    },
  ]);
  const cap = (response.noi / response.value) * 100;
  logResults(response.noi, response.value, cap);
};
// calculate net operating income
const calculateNoi = async () => {
  // get user input
  const response = await inquirer.prompt([
    {
      name: 'value',
      type: 'number',
      message: "What's the property's value?",
      default() {
        return 200000;
      },
    },
    {
      name: 'cap',
      type: 'number',
      message: "What's the property's cap rate?",
      default() {
        return 5;
      },
    },
  ]);
  const noi = response.value * (response.cap / 100);
  logResults(noi, response.value, response.cap);
};
/******************************************************************************/
// get and execute operation
const getOperation = async () => {
  // get user input
  const response = await inquirer.prompt({
    name: 'operation',
    type: 'list',
    message: 'What operation would you like to perform?',
    choices: [
      'calculate net operating income',
      'calculate cap rate',
      'calculate value',
    ],
    default() {
      return 'calculate net operating income';
    },
  });
  // execute operation
  if (response.operation === 'calculate cap rate') {
    calculateCap();
  } else if (response.operation === 'calculate value') {
    calculateValue();
  } else {
    calculateNoi();
  }
};
const logResults = (noi, value, cap) => {
  console.log(`-----
noi: ${chlkNoi('$' + noi)}
value: ${chlkValue('$' + value)}
cap: ${chlkCap(cap)} (${chlkCap(cap / 100)})`);
};
/******************************************************************************/
getOperation();
