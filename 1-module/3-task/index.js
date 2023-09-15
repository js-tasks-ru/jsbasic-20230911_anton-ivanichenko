function ucFirst(str) {
  let newStr = (str === '') ? '' : str[0].toUpperCase() + str.slice(1);

  return newStr;
}
