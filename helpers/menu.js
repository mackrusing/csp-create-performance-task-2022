// modules
const inquirer = require('inquirer');

/******************************************************************************/

module.exports.calculate = async () => {
  // get input using inquirer
  const response = await inquirer.prompt([
    {
      name: 'res',
      type: 'list',
      message: 'Perform which calculation?',
      choices: ['molar conversion'],
      default() {
        return 'molar conversion';
      },
    },
  ]);

  // return response
  return response.res;
};
