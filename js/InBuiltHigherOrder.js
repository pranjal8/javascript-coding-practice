const arr = [5, 1, 3, 2, 6];

/*   ===========================  */

/* Map method */
const result = arr.map(binary);

function binary(val) {
  return val.toString(2);
}

const result2 = arr.map((val) => {
  return val * 2;
});

const result3 = arr.map(function triple(val) {
  return val * 3;
});

console.log(result);
console.log(result2);
console.log(result3);

/*   ===========================  */

/*  Reduce method */

//Find max num inside array
arr.reduce(function (max, current) {
  if (max < current) {
    max = current;
  }

  return max;
}, 0);

//Find sum of array elements
const output =  arr.reduce((acc, curr) => {
  acc += curr;

  return acc;
}, 0);

/*   ===========================  */

/* Filter method */

//filter out Odd numbers
arr.filter((x) => {
  if (x % 2) return x;
});

console.log(output);
