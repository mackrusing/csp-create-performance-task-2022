// helpers
const input = require('../helpers/input');
const convertStr = require('../helpers/convert-str');
const convertObj = require('../helpers/convert-obj');
const calculate = require('../helpers/calculate');

module.exports.convert = async () => {
  // get user input
  const measureStr = await input.txt('Measure to convert?', '2 moles CH4');

  // onvert user input
  const measureObj = convertStr.measure(measureStr);

  // convert grams to moles if neccesary
  if (measureObj.unit === 'grams') {
    measureObj.amount /= calculate.atomicMass(measureObj.formula);
    measureObj.unit = 'moles';
  } else if (measureObj.unit === 'moles') {
    measureObj.amount *= calculate.atomicMass(measureObj.formula);
    measureObj.unit = 'grams';
  }

  // log answer as string
  console.log(convertObj.measure(measureObj));
};
