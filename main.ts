#!/usr/bin/env node

// import modules
import chalk from 'chalk';
import inquirer from 'inquirer';

/******************************************************************************/

// const chlkValue = chalk.bold.green;
// const chlkCap = chalk.bold.yellow;
// const chlkNoi = chalk.bold.magenta;

/******************************************************************************/

const isUpperCase = (char: string): boolean => {
  return true;
};

// const sliceEquation = (equation: string): string[] => {
//   let isReactantSide = true;
//   let isAwaitingIndicatior = false;
//   let formulaIndex = 0;
//   let current;

//   for (let i = 0; i < equation.length; i++) {
//     const char = equation[i];

//     // end current formula + await indicator
//     if (char === ' ') {
//       isAwaitingIndicatior = true;
//     }

//     // look for specific indicators
//     if (isAwaitingIndicatior) {
//       // indicate side switch
//       if (char === '>') {
//         isReactantSide = false;
//       }
//     }

//     if (isReactantSide) {
//     } else {
//     }

//     if (char !== '+' && char !== '>') {
//     }

//     if (char === '-') {
//       isReactantSide = false;
//     }

//     if (char === ' ') {
//       isAwaitingIndicatior = true;
//     }

//     if (isProductSide) {
//     }
//   }
//   return ['joe', ''];
// };

interface Formula {}

interface EquSort {
  reactants: string[];
  products: string[];
}

const separateEquation = (equStr: string) => {
  // split equation into array
  const equArr = equStr.split(' ');

  // object to be appended
  const equObj: any = {
    reactants: {},
    products: {},
  };

  // sort formula into reactants and products
  let isReactantSide = true;
  for (const str of equArr) {
    // skip all '+'s
    if (str === '+') {
      continue;
    }

    // check for side change
    if (str === '->') {
      isReactantSide = false;
      continue;
    }

    // add formulas to correct array
    if (isReactantSide) {
      equObj.reactants[str] = {};
    } else {
      equObj.products[str] = {};
    }
  }

  // separate elements in formulas
  for (const formula of Object.keys(equObj.reactants)) {
    let currentStr = '';

    // loop over each character
    for (const char of formula) {
      if (isUpperCase(char)) {
        currentStr += char;
      } else {
        currentStr += char;
      }
    }
  }

  for (const formula of Object.keys(equObj.products)) {
  }

  return equObj;
};

// console.log(separateEquation('NaCl2 + H2O -> NaO + HCl'));

/******************************************************************************/

// get chemical equation input
const getEquation = async () => {
  // get user input
  const response = await inquirer.prompt([
    {
      name: 'equation',
      type: 'string',
      message: 'What is the unbalenced equation?',
      default() {
        return 'NaCl2 + H2O -> NaO + HCl';
      },
    },
  ]);

  // process response
  const equObj = separateEquation(response.equation);

  return equObj;
};

/******************************************************************************/

console.log(await getEquation());

const ex = {
  reactants: {
    NaCl2: {
      Na: 1,
      Cl: 2,
    },
    H2O: {
      H: 2,
      O: 1,
    },
  },
  products: {
    NaO: [],
    HCl: [],
  },
};
