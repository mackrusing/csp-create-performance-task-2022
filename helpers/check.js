module.exports.isNum = (str) => {
  if (+str || +str === 0) {
    return true;
  } else {
    return false;
  }
};

module.exports.isUpperCase = (char) => {
  // check if number
  if (this.isNum(char)) {
    return false;
  }

  // check if lowercase
  if (char == char.toLowerCase()) {
    return false;
  }

  // otherwise uppercase
  return true;
};
