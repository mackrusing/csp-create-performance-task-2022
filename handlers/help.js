// helpers
const chalk = require('chalk');

module.exports.help = () => {
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
