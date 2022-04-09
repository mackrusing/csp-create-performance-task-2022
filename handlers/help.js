// helpers
const chalk = require('chalk');

module.exports.help = () => {
  console.log(
    'A command-line tool that helps with basic chemistry calculations.',
    '\n',
    chalk.bold('\nUSAGE'),
    '\n  chemhelp <command>',
    '\n',
    chalk.bold('\nCORE COMMANDS'),
    '\n  convert:      Convert from grams to moles (and vice versa)',
    '\n  solve:        Solve a simple stoich equation',
    '\n  help:         Display this help menu',
    '\n',
    chalk.bold('\nINPUT FORMATS'),
    '\n  equations:    CH4 + 2O2 -> CO2 + 2H2O',
    '\n                CH4 + 2O2 = CO2 + 2H2O',
    '\n',
    '\n  measures:     2.5 moles CO2',
    '\n                235 grams CO2'
  );
};
