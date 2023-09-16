function factorial(n) {

  let solution = 1;

  for (let num = n; num > 1; num--) {

    solution *= num;
  }

  return solution;
}
