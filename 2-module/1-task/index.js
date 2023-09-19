function sumSalary(salaries) {
  let salariesSum = 0;

  for (let key in salaries) {

    if (isFinite(salaries[key])) salariesSum += salaries[key];
  }

  return salariesSum;
}
