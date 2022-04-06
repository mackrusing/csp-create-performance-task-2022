// modules
const inquirer = require('inquirer');

/******************************************************************************/

module.exports.txt = async (prompt, sample) => {
  // get input using inquirer
  const response = await inquirer.prompt([
    {
      name: 'res',
      type: 'string',
      message: prompt,
      default() {
        return sample;
      },
    },
  ]);

  // return response
  return response.res;
};
