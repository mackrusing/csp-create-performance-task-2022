// helpers
const input = require('../helpers/input');
const convertStr = require('../helpers/convert-str');
const convertObj = require('../helpers/convert-obj');
const calculate = require('../helpers/calculate');
const error = require('../helpers/error');

module.exports.convert = async () => {
  // get user input
  const measureStr = await input.txt('Measure to convert?', '2 moles CH4');

  // convert user input
  const measureObj = convertStr.measure(measureStr);

  // catch user input error
  try {
    // convert grams to moles if neccesary
    if (measureObj.unit === 'grams') {
      measureObj.amount /= calculate.atomicMass(measureObj.formula);
      measureObj.unit = 'moles';
    } else if (measureObj.unit === 'moles') {
      measureObj.amount *= calculate.atomicMass(measureObj.formula);
      measureObj.unit = 'grams';
    }
  } catch (err) {
    // catch error and end
    error.input();
  }

  // check for errors
  if (!measureObj.amount || !measureObj.unit || !measureObj.formula) {
    error.input();
  }

  // log answer as string
  console.log(convertObj.measure(measureObj));
};
