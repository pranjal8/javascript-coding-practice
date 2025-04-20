function flattenArray(nestedArray) {
  //Use Infinity to completely flatten:
  // return nestedArray.flat(Infinity);

  //Using Recursion
 /*  return nestedArray.reduce((acc, current) => {
    return Array.isArray(current)
      ? acc.concat(flattenArray(current))
      : acc.concat(current);
  }, []); */

  let arr= []
  for(let item of nestedArray) {
    if(Array.isArray(item)){
       arr = arr.concat( flattenArray(item) );
    }else if(typeof item === 'number'){
        arr.push(item)
    }

  }
  return arr;
 
}

const nested = [1, [2, [3, [4]]]];
console.log(flattenArray(nested));
