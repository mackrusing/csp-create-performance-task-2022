// separate input string into array
const input = 'NaCl2 + H2O -> NaO + HCl';

const separated = input.split(' ');

console.log(separated);

const separatedFormula = ['NaCl2', '+', 'H2O', '->', 'NaO', '+', 'HCl'];

// sort formula into reactants and products
let isReactantSide = true;
const sortedEquation = {
  reactants: [],
  products: [],
};
for (let i = 0; i < separatedFormula.length; i++) {
  // get current element
  const currentString = separatedFormula[i];

  // skip all '+'s
  if (currentString !== '+') {
    // check for change of side
    if (currentString === '->') {
      isReactantSide = false;
    } else if (isReactantSide) {
      sortedEquation.reactants.push(currentString);
    } else {
      sortedEquation.products.push(currentString);
    }
  }
}

/*
{
  reactants: ['NaCl2', 'H2O'],
  products: ['NaO', 'HCl'],
}
*/

// ```js
// const stage1 = {
//   reactants: ['NaCl2', 'H20'],
//   products: ['NaO', 'HCl'],
// };
// ```

// 2. separate chemical formulas into individual elements / polyatomic ions

// ```js
// const stage2 = {
//   reactants: ['Na', 'Cl2', 'H2', 'O'],
//   products: ['Na', 'O', 'H', 'Cl'],
// };
// ```

// 3. separate polyatomic ions into elements (change example)

// ```js
// const stage3 = {
//   reactants: ['Na', 'Cl2', 'H2', 'O'],
//   products: ['Na', 'O', 'H', 'Cl'],
// };
// ```

// 4. count elements

// ```js
// const stage3 = {
//   reactants: {
//     Na: 1,
//     Cl: 2,
//     H: 2,
//     O: 1,
//   },
//   products: {
//     Na: 1,
//     Cl: 1,
//     H: 1,
//     O: 1,
//   },
// };
// ```
