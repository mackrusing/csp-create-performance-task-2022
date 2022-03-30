// helpers
const input = require('helpers/user-input.js');

// command line arguments
const arguments = process.argv.slice(2);

// handle help command
if (arguments[0] === 'help') {
  console.log('avalible commands: help, solve');
  process.exit(0);
}

// handle solve command
if (arguments[0] === 'solve') {
  process.exit(0);
}

// handle invalid command call
console.log(
  'no/invalid command provided. use help command to see list of operations'
);
process.exit(1);
