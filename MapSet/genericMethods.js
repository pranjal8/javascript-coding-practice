let user = {
  name: "John",
  age: 30,
  isAdmin: true,
};

for (let [key, value] of Object.entries(user)) {
  console.log(key, value);
}

function sumSalaries(salaries) {
  let sum = 0;

  for (let salary of Object.values(salaries)) {
    sum += salary;
  }

  return sum;
}

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

console.log(sumSalaries(salaries));
