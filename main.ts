#!/usr/local/bin/node

// import modules
import chalk from 'chalk';
import inquirer from 'inquirer';

// value = noi / cap
// cap rate = noi / value
// noi = value * cap

// anual rent = per sq ft * sq ft
// monthly rent = anual rent / 12
// anual / cap rate = value of investment

// calculate value
const calculateValue = (noi: number, cap: number) => {
  return noi / cap;
};

// calculate cap rate
const calculateCap = (noi: number, value: number) => {
  return noi / value;
};

// calculate net operating income
const calculateNoi = async (value: number, cap: number) => {
  // get user input
  const response = await inquirer.prompt([
    {
      name: 'value',
      type: 'number',
      message: "What's the property's value?",
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
  return response.value * (response.cap / 100);
};

// get and return the operation to execute
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
      return 'calculate value';
    },
  });

  // return shortened response keyword
  if (response.operation === 'calculate net operating income') {
    return 'calculateNoi';
  } else if (response.operation === 'calculate cap rate') {
    return 'calculateCap';
  } else {
    return 'calculateValue';
  }
};

//
const askValues = async (operation: string) => {
  // ask for values needed to calculate noi
  if (operation === 'calculateNoi') {
    // get user input
    const response = await inquirer.prompt([
      {
        name: 'income',
        type: 'number',
        message: "What is the property's income?",
        default() {
          return 10000;
        },
      },
      {
        name: 'expenses',
        type: 'number',
        message: "What is the property's expenses?",
        default() {
          return 2000;
        },
      },
    ]);
    return calculateNoi(response.income, response.expenses);
  } else if (operation === 'calculateValue') {
    // get user input
    const response = await inquirer.prompt([
      {
        name: 'noi',
        type: 'number',
        message: "What is the property's NOI?",
        default() {
          return 10000;
        },
      },
      {
        name: 'cap',
        type: 'number',
        message: "What is the property's cap rate?",
        default() {
          return 0.05;
        },
      },
    ]);
    return calculateValue(response.noi, response.cap);
  }
};

// const operation = await getOperation();
// const result = await askValues(operation);
// console.log(result);

// let playerName: string;
//
// const askInput = async () => {
//   const answers = await inquirer.prompt({
//     name: 'player_name',
//     type: 'input',
//     message: 'What is your name?',
//     // default() {
//     //   return 'Player';
//     // },
//   });
//   playerName = answers.player_name;
//   console.log(playerName);
// };

// console.log(chalk.bgCyanBright.bold.black('hello world'));
// await askInput();
// console.log(await getOperation());
