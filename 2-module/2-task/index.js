function isEmpty(obj) {
  for (let key in obj) {

    return !(key in obj);
  }

  return true;
}
