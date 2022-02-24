// helpers
const input = require('../helpers/input');
const convertStr = require('../helpers/convert-str');
const calculate = require('../helpers/calculate');
const error = require('../helpers/error');

module.exports.solve = async () => {
  // get user input
  const equationStr = await input.txt('Equation?', 'CH4 + 2O2 -> 2H2O + CO2');
  const measureStr = await input.txt('Given?', '2 moles CH4');

  // convert user input
  const equationObj = convertStr.equation(equationStr);
  const measureObj = convertStr.measure(measureStr);

  let table;

  // catch input errors when calculating
  try {
    // convert grams to moles if necessary
    if (measureObj.unit === 'grams') {
      measureObj.amount /= calculate.atomicMass(measureObj.formula);
      measureObj.unit = 'moles';
    }

    // calculate table
    table = calculate.simpleStoich(equationObj, measureObj);
  } catch (err) {
    // catch error and end
    error.input();
  }

  // log table to console
  console.table(table);
};
