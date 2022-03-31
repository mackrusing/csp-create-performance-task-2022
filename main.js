#!/usr/bin/env node

// helpers
const solve = require('./handlers/solve');

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

// handle invalid command call
// console.log(
//   'no/invalid command provided. use help command to see list of operations'
// );
// process.exit(1);
