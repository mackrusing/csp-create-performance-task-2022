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
  const equation = equStrToObj(
    await getTxtInput(
      'What is the balanced chemical equation?',
      'CH4 + 2O2 -> 2H2O + CO2'
    )
  );
  const reactant1 = meaStrToObj(
    await getTxtInput('What is the given reactant?', '20 grams CH4')
  );
  // gramsToMoles();
  console.log(gramsToMoles(reactant1));
};

/*********************************** tests ************************************/

calcFrom1Reactant();
