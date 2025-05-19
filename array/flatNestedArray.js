function flattenArray(nestedArray) {
  //Approach 1. Use Infinity to completely flatten:
  // return nestedArray.flat(Infinity);

  //Approach 2. Using reduce with Recursion
  /*  return nestedArray.reduce((acc, current) => {
    return Array.isArray(current)
      ? acc.concat(flattenArray(current))
      : acc.concat(current);
  }, []); */

  //Approach 3. Using Recursion
  let arr = [];
  for (let item of nestedArray) {
    if (Array.isArray(item)) {
      arr = arr.concat(flattenArray(item));
    } else if (typeof item === "number") {
      arr.push(item);
    }
  }
  return arr;
}

const nested = [1, [2, [3, [4]]]];
console.log(flattenArray(nested));
