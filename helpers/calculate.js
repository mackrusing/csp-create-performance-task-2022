module.exports.molesToGrams = () => {};

module.exports.gramsToMoles = () => {};

module.exports.simpleStoich = (equation, input) => {
  const endTable = {};

  // add attributes to table
  for (const side of Object.keys(equation)) {
    for (const obj of equation[side]) {
      endTable[obj.formula] = { moles: 0, grams: 0 };
    }
  }

  // convert moles to grams
  if (input.unit === 'grams') {
  }

  // add input
  endTable[input.formula].b = input.ammount;

  // calculate moles column
  for (const equation of Object.keys(endTable)) {
  }

  return endTable;
};
