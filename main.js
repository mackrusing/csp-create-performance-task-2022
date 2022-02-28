#!/usr/local/bin/node
import inquirer from 'inquirer';
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
    return response.noi / (response.cap / 100);
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
    return (response.noi / response.value) * 100;
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
    return response.value * (response.cap / 100);
};
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
            return 'calculate value';
        },
    });
    // execute operation
    if (response.operation === 'calculate net operating income') {
        return await calculateNoi();
    }
    else if (response.operation === 'calculate cap rate') {
        return await calculateCap();
    }
    else {
        return await calculateValue();
    }
};
console.log(await getOperation());
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
