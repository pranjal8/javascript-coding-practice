let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

function topSalary(salaries) {
  let maxSalary = 0;
  let maxName = null;

  for (const [name, salary] of Object.entries(salaries)) {
    if (salary === undefined) return null;
    if (salary > maxSalary) {
      maxSalary = salary;
      name = name;
    }
    console.log(maxSalary);
  }
}

topSalary(salaries); // Pete
