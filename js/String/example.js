const str = "pranjal#2000;sonam#2000;samruddhi#4000;divya#7000";

const employees = str.split(";");


const result = employees
  .map(employee => {
    const [name, salary] = employee.split("#"); 
    return { name, salary: parseInt(salary, 10) }; 
  })
  .filter(employee => employee.salary > 3000) 
  .map(employee => employee.name); 

console.log(result); 