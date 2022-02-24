// helpers
const check = require('./check');
const error = require('../helpers/error');

module.exports.measure = (measureStr) => {
  const measureArr = measureStr.split(' ');

  // find correct unit
  let unit;
  if (
    measureArr[1] === 'g' ||
    measureArr[1] === 'gram' ||
    measureArr[1] === 'grams'
  ) {
    unit = 'grams';
  } else if (
    measureArr[1] === 'mol' ||
    measureArr[1] === 'mole' ||
    measureArr[1] === 'moles'
  ) {
    unit = 'moles';
  } else {
    error.input();
  }

  return {
    amount: +measureArr[0],
    unit: unit,
    formula: measureArr[2],
  };
};

module.exports.equation = (equationStr) => {
  // split equation into array
  const equationArr = equationStr.split(' ');

  // object to be appended
  const equationObj = {};

  // sort formula into reactants and products
  for (const str of equationArr) {
    // skip all '+'s
    if (str === '+' || str === '->' || str === '=') {
      continue;
    }

    // make formula object
    const formulaObj = { formula: '', coefficient: '' };

    // loop over string
    let isCoefficient = true;
    for (const char of str) {
      // check if coefficient
      if (!check.isNum(char)) {
        isCoefficient = false;
      }

      // add to correct part of object
      if (isCoefficient) {
        formulaObj.coefficient += char;
      } else {
        formulaObj.formula += char;
      }
    }

    // modify coefficient
    if (formulaObj.coefficient === '') {
      formulaObj.coefficient = '1';
    }

    // convert coefficient to number
    formulaObj.coefficient = +formulaObj.coefficient;

    // add to object
    equationObj[formulaObj.formula] = formulaObj;
  }

  return equationObj;
};
