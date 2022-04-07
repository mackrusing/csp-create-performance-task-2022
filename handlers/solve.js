// helpers
const input = require('../helpers/input');
const convertStr = require('../helpers/convert-str');
const calculate = require('../helpers/calculate');

module.exports.simple = async () => {
  // get user input
  const equationStr = await input.txt('Equation?', 'CH4 + 2O2 -> 2H2O + CO2');
  const measureStr = await input.txt('Given?', '2 moles CH4');

  // onvert user input
  const equationObj = convertStr.equation(equationStr);
  const measureObj = convertStr.measure(measureStr);

  // convert grams to moles if neccesary
  if (measureObj.unit === 'grams') {
    measureObj.amount /= calculate.atomicMass(measureObj.formula);
    measureObj.unit = 'moles';
  }

  // log table to console
  console.table(calculate.simpleStoich(equationObj, measureObj));
};
