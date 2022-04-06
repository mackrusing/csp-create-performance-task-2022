// helpers
const chalk = require('chalk');

module.exports.usage = () => {
  console.log(
    'Perform basic chemistry calculations.',
    '\n',
    chalk.bold('\nUSAGE'),
    '\n  chemhelp <command> <subcommand>',
    '\n',
    chalk.bold('\nCORE COMMANDS'),
    '\n  solve:        Perform a stoichiometry calculation',
    '\n  convert:      Convert from grams to moles (and vice versa)',
    '\n',
    chalk.bold('\nADDITIONAL COMMANDS'),
    '\n  help:         Display help for a command'
  );
};

module.exports.solve = () => {
  console.log(
    'Perform a stoichiometry calculation',
    '\n',
    chalk.bold('\nUSAGE'),
    '\n  chemhelp solve <subcommand>',
    '\n',
    chalk.bold('\nSUBCOMMANDS'),
    '\n  simple:       Find other masses from one given value',
    '\n  lr:           Given multiple values, find limiting reactant'
  );
};
