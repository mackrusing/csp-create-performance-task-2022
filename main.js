#!/usr/bin/env node

// modules
const chalk = require('chalk');

// handlers
const solve = require('./handlers/solve');
const { convert } = require('./handlers/convert');
const help = require('./handlers/help');

// command line arguments
const args = process.argv.slice(2);

// handle help command
if (args[0] === 'help' || args.length === 0) {
  help.usage();
}

// handle solve command
else if (args[0] === 'solve') {
  if (args[1] === 'simple') {
    solve.simple();
  } else if (args[1] === 'lr') {
    console.log('Solving limiting reactant problems is not supported yet.');
  } else if (args[1] === 'help' || !args[1]) {
    help.solve();
  } else {
    console.log(
      `unknown command "${args[1]}" for "solve"`,
      '\n',
      '\nUse',
      chalk.italic('chemhelp solve help'),
      'to see a list of subcommands.'
    );
  }
}

// handle calculate command
else if (args[0] === 'convert') {
  convert();
}

// handle invalid command call
else {
  console.log(
    `unknown command "${args[0]}"`,
    '\n',
    '\nUse',
    chalk.italic('chemhelp help'),
    'to see a list of operations.'
  );
  process.exit(1);
}
