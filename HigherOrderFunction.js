const radius = [1, 3, 4, 2];

const area = (r) => {
  return Math.PI * r * r;
};

const diameter = function (r) {
  return Math.PI * r;
};

const circumferences = function circle(r) {
  return 2 * Math.PI * r;
};

const calculate = (radius, logic) => {
  let result = [];
  for (let i = 0; i < radius.length; i++) {
    result.push(logic(radius[i]));
  }
  return result;
};

console.log(radius.map(area))

console.log("Area of circle", calculate(radius, area));
console.log("Radius of circle", calculate(radius, diameter));
console.log("Circunferences of circle", calculate(radius, circumferences));


/*  Higher order function is y and x is callback function   */

function x() {
  console.log("Inside X");
}
function y(callback) {
  callback();
}

y(x);
