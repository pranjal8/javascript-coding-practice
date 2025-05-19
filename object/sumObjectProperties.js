let salaries={
    John:100,
    Ann:160,
    Pete:130
}

function sumOfSalaries(salaries) {
   //Approach 1
    return Object.values(salaries).reduce((acc,curr) => acc + curr, 0 ) 
  
    //Approach 2
    let sum =0;
    for(let key in salaries){
        sum += salaries[key]
    }
    return sum;
}

console.log(sumOfSalaries(salaries))