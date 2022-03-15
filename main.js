#!/usr/bin/env node
import inquirer from 'inquirer';
/******************************************************************************/
// const chlkValue = chalk.bold.green;
// const chlkCap = chalk.bold.yellow;
// const chlkNoi = chalk.bold.magenta;
/******************************************************************************/
const isUpperCase = (char) => {
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
const isNum = (str) => {
    if (+str) {
        return true;
    }
    else {
        return false;
    }
};
const separateEquation = (equStr) => {
    // split equation into array
    const equArr = equStr.split(' ');
    // object to be appended
    const equObj = {
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
        }
        else {
            equObj.products[str] = {};
            // equObj.products[str].elements = [];
        }
    }
    // separate elements in formulas
    for (let i = 0; i < 2; i++) {
        // change side
        let side;
        if (i === 0) {
            side = 'reactants';
        }
        else {
            side = 'products';
        }
        // execute loop
        for (const formula of Object.keys(equObj[side])) {
            // setup loop vars
            let currentStr = '';
            let formulaComponents = [];
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
                    }
                    else {
                        subscript += char;
                    }
                    // if is last character
                    if (i === component.length - 1) {
                        // handle subscripts (and absence of subscripts)
                        if (!isSubscript) {
                            equObj[side][formula][element] = 1;
                        }
                        else {
                            equObj[side][formula][element] = parseInt(subscript);
                        }
                    }
                }
            }
        }
    }
    return equObj;
};
const solveEquation = (equObj) => {
    // check
};
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
const createFormula = () => { };
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
    }
    else {
        return getFormula();
    }
};
console.log(await getOperation());
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
        NaO: {},
        HCl: {},
    },
};
