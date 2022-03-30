module.exports.measure = (measureStr) => {
  const meaArr = meaStr.split(' ');
  return {
    ammount: +meaArr[0],
    unit: meaArr[1],
    formula: meaArr[2],
  };
};

module.exports.equation = (equationStr) => {};
