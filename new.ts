// modules
import inquirer from 'inquirer';

/*************************** character type helpers ***************************/

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

/***************************** user input helpers *****************************/

// text input
const getTxtInput = async (prompt: string, sample: string) => {
  const response = await inquirer.prompt([
    {
      name: 'res',
      type: 'string',
      message: prompt,
      default() {
        return sample;
      },
    },
  ]);
  return response.res;
};

// destructured 4 part equation input
const getFourPtEqu = async () => {
  const response = await inquirer.prompt([
    {
      name: 'react1',
      type: 'string',
      message: 'What is the first reactant?',
      default() {
        return 'CH4';
      },
    },
    {
      name: 'react1co',
      type: 'number',
      message: "What is it's coefficient?",
      default() {
        return 1;
      },
    },
    {
      name: 'react2',
      type: 'string',
      message: 'What is the second reactant?',
      default() {
        return 'O2';
      },
    },
    {
      name: 'react2co',
      type: 'number',
      message: "What is it's coefficient?",
      default() {
        return 1;
      },
    },
    {
      name: 'pro1',
      type: 'string',
      message: 'What is the first product?',
      default() {
        return 'H2O';
      },
    },
    {
      name: 'pro1co',
      type: 'number',
      message: "What is it's coefficient?",
      default() {
        return 1;
      },
    },
    {
      name: 'pro2',
      type: 'string',
      message: 'What is the first product?',
      default() {
        return 'CO2';
      },
    },
    {
      name: 'pro2co',
      type: 'number',
      message: "What is it's coefficient?",
      default() {
        return 1;
      },
    },
  ]);

  const equObj: any = {};

  equObj[response.react1] = {};
  equObj[response.react1].coefficient = response.react1co;
  equObj[response.react2] = {};
  equObj[response.react2].coefficient = response.react2co;
  equObj[response.pro1] = {};
  equObj[response.pro1].coefficient = response.pro1co;
  equObj[response.pro2] = {};
  equObj[response.pro2].coefficient = response.pro2co;

  return equObj;
};

/************************** input strings to objects **************************/

// convert equation in string form to object
const equStrToObj = (equStr: string) => {
  const equArr = equStr.split(' ');
};

// convert measurement in string form to object
const meaStrToObj = (meaStr: string) => {
  const meaArr = meaStr.split(' ');
  return {
    ammount: +meaArr[0],
    unit: meaArr[1],
    formula: meaArr[2],
  };
};

// convert formula to array of element objects
const formulaToElementsArr = (formula: string) => {
  // list of elements in formula
  const elementsArr: any = [];

  // loop vars
  let currentElement = { element: '', subscript: '' };

  // split up elements
  for (let i = 0; i < formula.length; i++) {
    // current character
    const currentChar = formula[i];

    // check for capital character
    if (isUpperCase(currentChar) && i !== 0) {
      elementsArr.push(currentElement);
      currentElement = { element: '', subscript: '' };
    }

    // add letter or number
    if (isNum(currentChar)) {
      currentElement.subscript += currentChar;
    } else {
      currentElement.element += currentChar;
    }

    // check for last character
    if (i === formula.length - 1) {
      elementsArr.push(currentElement);
    }
  }

  // clean up elements array
  for (const obj of elementsArr) {
    // convert empty subscripts to one
    if (obj.subscript === '') {
      obj.subscript = 1;
    }

    // convert subscripts to numbers
    obj.subscript = +obj.subscript;
  }

  return elementsArr;
};

/******************************* grams to moles *******************************/

// convert a formula with ammount in grams to moles
const gramsToMoles = (formula: any) => {
  const eleArr = formulaToElementsArr(formula.formula);
  console.log(eleArr);
};

/********************************* operations *********************************/

const calcFrom1Reactant = async () => {
  const equation = await getFourPtEqu();
  const reactant1 = meaStrToObj(
    await getTxtInput('What is the given reactant?', '20 grams CH4')
  );
  // gramsToMoles();
  console.log(equation);
  console.log(reactant1);
  console.log(gramsToMoles(reactant1));
};

/*********************************** tests ************************************/

calcFrom1Reactant();
