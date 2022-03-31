module.exports.molesToGrams = () => {};

module.exports.simpleStoich = (equation, input) => {
  const endTable = {};

  // add attributes to table
  for (const side of Object.keys(equation)) {
    for (const obj of equation[side]) {
      endTable[obj.formula] = { b: 0, c: 0, a: 0 };
    }
  }

  // add input
  endTable[input.formula].b = input.ammount;

  // modify b column
  for (const equation of Object.keys(endTable)) {
  }

  return endTable;
};
