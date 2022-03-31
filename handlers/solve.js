// helpers
const input = require('../helpers/input');
const convertStr = require('../helpers/convert-str');
const calculate = require('../helpers/calculate');

module.exports.simple = async () => {
  const equationStr = await input.txt('Equation?', 'CH4 + 2O2 -> 2H2O + CO2');
  const measureStr = await input.txt('Given?', '2 moles CH4');

  const equationObj = convertStr.equation(equationStr);
  const measureObj = convertStr.measure(measureStr);

  const endTable = calculate.simpleStoich(equationObj, measureObj);

  console.log(equationObj);
  console.log(measureObj);
  console.table(endTable);
};
