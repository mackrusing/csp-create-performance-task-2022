#!/usr/bin/env node

// handlers
const solve = require('./handlers/solve');
const calculate = require('./handlers/calculate');

// helpers
const menu = require('./helpers/menu');

// command line arguments
const args = process.argv.slice(2);

// handle help command
if (args[0] === 'help') {
  console.log('avalible commands: help, solve');
}

// handle solve command
if (args[0] === 'solve') {
  solve.simple();
}

// handle calculate command
if (args[0] === 'calculate') {
  if (args[1] === 'molconv') {
    calculate.molarConversion();
  } else {
    menu.calculate();
  }
}

// handle invalid command call
// console.log(
//   'no/invalid command provided. use help command to see list of operations'
// );
// process.exit(1);
