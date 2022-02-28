#!/usr/local/bin/node
import inquirer from 'inquirer';
const calculateNoi = (income, expenses) => {
  return income - expenses;
};
const calculateValue = (noi, cap) => {
  return noi / cap;
};
const calculateCap = (noi, value) => {
  return noi / value;
};
console.log(calculateValue(10000, 0.05));
console.log(calculateCap(10000, 200000));
// noi / cap = value
// noi / value = cap
// get and return the operation to execute
const askOperation = async () => {
  // get user input
  const response = await inquirer.prompt({
    name: 'operation',
    type: 'list',
    message: 'What operation would you like to perform?',
    choices: ['Calculate NOI (net operating income)', 'Calculate value'],
  });
  // return shortened response keyword
  if (response.operation === 'Calculate NOI (net operating income)') {
    return 'calculateNoi';
  } else {
    return 'calculateValue';
  }
};
const askValues = async (operation) => {
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
// const operation = await askOperation();
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
// console.log(await askOperation());
