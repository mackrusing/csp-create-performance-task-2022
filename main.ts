#!/usr/bin/env node

// import modules
import chalk from 'chalk';
import inquirer from 'inquirer';

/******************************************************************************/

// const chlkValue = chalk.bold.green;
// const chlkCap = chalk.bold.yellow;
// const chlkNoi = chalk.bold.magenta;

/******************************************************************************/

const isUpperCase = (char: string) => {};

const sliceEquation = (equation: string): string[] => {
  let isReactantSide = true;
  let isAwaitingIndicatior = false;
  let formulaIndex = 0
  let current 

  for (let i = 0; i < equation.length; i++) {
    

    const char = equation[i]

    // end current formula + await indicator
    if (char === ' ') {
      isAwaitingIndicatior = true;
    }

    // look for specific indicators
    if (isAwaitingIndicatior) {
      // indicate side switch
      if (char === '>') {
        isReactantSide = false;
      }
    }

    if (isReactantSide) {

    } else {

    }

    if (char !== '+' && char !== '>') {

    }

    if (char === '-') {
      isReactantSide = false;
    }

    if (char === ' ') {
      isAwaitingIndicatior = true;
    }

    if (isProductSide) {

    }
  }
  return ['joe', '']
}

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
        return 'Na(OH)2 + CO2 -> NaO + H2O';
      },
    },
  ]);

  // process response
  const equation = response.equation;
  const extractedData = {};

  for (let char = 0; char < equation.length; char++) {
    if 
  }

  const exMidData = {
    reactants: ['Na', '(OH)2', 'C', 'O2'],
    products: ['Na', 'O', 'H2', 'O'],
  };

  const exData = {
    reactants: {
      Na: 1,
      O: 3,
      H: 2,
      C: 1,
    },
    products: {
      Na: 1,
      O: 2,
      H: 2,
    },
  };
};

/******************************************************************************/

console.clear();
