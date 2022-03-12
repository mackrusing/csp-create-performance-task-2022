#!/usr/bin/env node
import inquirer from 'inquirer';
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
        }
        else {
            equObj.products[str] = {};
        }
    }
    // separate elements in formulas
    for (const formula of Object.keys(equObj.reactants)) {
        for (const char of formula) {
            console.log(char);
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
