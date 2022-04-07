// helpers
const check = require('./check');

/******************************************************************************/

module.exports.measure = (measureStr) => {
  const measureArr = measureStr.split(' ');
  return {
    amount: +measureArr[0],
    unit: measureArr[1],
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

// module.exports.equation = (equationStr) => {
//   // split equation into array
//   const equationArr = equationStr.split(' ');

//   // object to be appended
//   const equationObj = {
//     reactants: [],
//     products: [],
//   };

//   // sort formula into reactants and products
//   let isReactantSide = true;
//   for (const str of equationArr) {
//     // skip all '+'s
//     if (str === '+') {
//       continue;
//     }

//     // check for side change
//     if (str === '->') {
//       isReactantSide = false;
//       continue;
//     }

//     // make formula objects
//     const formulaObj = {
//       formula: '',
//       coefficient: '',
//     };

//     // loop over string
//     let isCoefficient = true;
//     for (const char of str) {
//       // check if coefficient
//       if (!check.isNum(char)) {
//         isCoefficient = false;
//       }

//       // add to correct part of object
//       if (isCoefficient) {
//         formulaObj.coefficient += char;
//       } else {
//         formulaObj.formula += char;
//       }
//     }

//     // modify coefficient
//     if (formulaObj.coefficient === '') {
//       formulaObj.coefficient = '1';
//     }

//     formulaObj.coefficient = +formulaObj.coefficient;

//     // push to array
//     if (isReactantSide) {
//       equationObj.reactants.push(formulaObj);
//     } else {
//       equationObj.products.push(formulaObj);
//     }
//   }

//   return equationObj;
// };
