// modules
const util = require('periodic-table/util');

// helpers
const check = require('../helpers/check');

/******************************************************************************/

module.exports.atomicMass = (formula) => {
  let updatedFormula = '';
  for (let i = 0; i < formula.length; i++) {
    // if first char always add add skip rest
    if (i === 0) {
      updatedFormula += formula[i];
      continue;
    }

    // if capital add space
    if (check.isUpperCase(formula[i])) {
      updatedFormula += ' ';
    }

    // add character
    updatedFormula += formula[i];
  }

  return util.atomicMass(updatedFormula);
};

module.exports.simpleStoich = (equationObj, measureObj) => {
  // calculate multiplier
  const baseMol =
    measureObj.ammount / equationObj[measureObj.formula].coefficient;

  // table obj
  const table = {};
  for (const key of Object.keys(equationObj)) {
    // calculate values
    const calculatedMol = baseMol * equationObj[key].coefficient;
    const calculatedG = calculatedMol * this.atomicMass(key);

    // add values to table
    table[key] = { moles: calculatedMol, grams: calculatedG };
  }

  // return finished table
  return table;
};
