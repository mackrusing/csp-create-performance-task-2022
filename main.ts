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
  // check if number
  if (isNum(char)) {
    return false;
  }

  // check if lowercase
  if (char == char.toLowerCase()) {
    return false;
  }

  // otherwise uppercase
  return true;
};

const isNum = (str: string): boolean => {
  if (+str) {
    return true;
  } else {
    return false;
  }
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
      // equObj.reactants[str].elements = [];
    } else {
      equObj.products[str] = {};
      // equObj.products[str].elements = [];
    }
  }

  // separate elements in formulas
  for (const formula of Object.keys(equObj.reactants)) {
    // setup loop vars
    let currentStr = '';
    let formulaComponents: string[] = [];

    // loop over each character
    for (let i = 0; i < formula.length; i++) {
      // get current character
      const char = formula[i];

      // start new element
      if (isUpperCase(char) && i !== 0) {
        formulaComponents.push(currentStr);
        currentStr = '';
      }

      // add current char to string
      currentStr += char;

      // check if last character
      if (i === formula.length - 1) {
        formulaComponents.push(currentStr);
      }
    }

    // console.log(formulaComponents);

    // loop over components of current formulas
    for (const component of formulaComponents) {
      // setup loop vars
      let element = '';
      let subscript = '';
      let isSubscript = false;

      // loop over each character
      for (let i = 0; i < component.length; i++) {
        const char = component[i];

        if (isNum(char)) {
          isSubscript = true;
        }

        // add character to corresponding loop var
        if (!isSubscript) {
          element += char;
        } else {
          subscript += char;
        }

        // if is last character
        if (i === component.length - 1) {
          // handle subscripts (and absence of subscripts)
          if (!isSubscript) {
            equObj.reactants[formula][element] += 1;
          } else {
            equObj.reactants[formula][element] += parseInt(subscript);
          }
        }

        // console.log(element);
        // console.log(subscript);
      }
    }
  }

  console.log(equObj);
  // console.log(equObj.reactants);

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

const getFormula = async () => {
  // get user input
  const response = await inquirer.prompt([
    {
      name: 'positive_ion',
      type: 'string',
      message: 'What is the positive ion?',
      default() {
        return 'Na';
      },
    },
    {
      name: 'negative_ion',
      type: 'string',
      message: 'What is the negative ion?',
      default() {
        return 'Cl';
      },
    },
  ]);

  //
};

const createFormula = () => {};

/******************************************************************************/

// get operation from user
const getOperation = async () => {
  // get user input
  const response = await inquirer.prompt([
    {
      name: 'operation',
      type: 'list',
      message: 'What would you like to do?',
      choices: ['Create formula', 'Balance equation'],
      default() {
        return 'Create formula';
      },
    },
  ]);

  // execute operation
  if (response.operation === 'Balance equation') {
    return getEquation();
  } else {
    return getFormula();
  }
};

await getOperation();

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
