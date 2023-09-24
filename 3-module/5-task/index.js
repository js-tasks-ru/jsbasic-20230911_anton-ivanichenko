function getMinMax(str) {
  let numArray = str.split(' ')
    .reduce((array, item) => {

      if (+item) array.push(+item);
      return array;
    }, [])
    .sort((a, b) => a - b);

  return { min: numArray.at(0), max: numArray.at(-1) };
}
