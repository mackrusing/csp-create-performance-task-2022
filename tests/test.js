// const util = require('periodic-table/util');
// const check = require('../helpers/check');

// const calcAtomicMass = (formula) => {
//   let updatedFormula = '';
//   for (let i = 0; i < formula.length; i++) {
//     // if first char always add add skip rest
//     if (i === 0) {
//       updatedFormula += formula[i];
//       continue;
//     }

//     // if capital add space
//     if (check.isUpperCase(formula[i])) {
//       updatedFormula += ' ';
//     }

//     // add character
//     updatedFormula += formula[i];
//   }

//   return util.atomicMass(updatedFormula);
// };

// console.log(calcAtomicMass('H2O'));

/******************************************************************************/

const myEquationObj = {
  CH4: { coefficient: 1 },
  O2: { coefficient: 2 },
  H2O: { coefficient: 2 },
  CO2: { coefficient: 1 },
};

const myGivenObj = { formula: 'CH4', amount: 2 };

const simpleStoich = (equationObj, measureObj) => {
  // calculate multiplier
  const baseMol =
    measureObj.amount / equationObj[measureObj.formula].coefficient;

  // table obj
  const table = {};
  for (const key of Object.keys(equationObj)) {
    const calculatedMol = baseMol * equationObj[key].coefficient;
    const calculatedG = calculatedMol * calcAtomicMass(key);
    table[key] = { moles: calculatedMol, grams: calculatedG };
  }

  // return and end
  return table;
};

console.table(simpleStoich(myEquationObj, myGivenObj));

/******************************************************************************/
