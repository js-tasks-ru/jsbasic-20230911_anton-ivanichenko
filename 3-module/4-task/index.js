function showSalary(users, age) {
  const strArray = users.reduce((array, obj) => {

    if (obj.age <= age) array.push(`${obj.name}, ${obj.balance}`);
    return array;
  }, []);

  return strArray.join('\n');
}
