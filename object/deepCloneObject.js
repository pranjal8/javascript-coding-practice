// function deepClone(obj){

//     return JSON.parse((JSON.stringify(obj)))
// }

//Approach 2
function deepClone(obj) {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }
  if (obj instanceof Date) {
    return new Date(obj);
  }
  if (obj instanceof RegExp) {
    return new RegExp(obj);
  }
  
  const clone = Array.isArray(obj) ? [] : {};
  
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      clone[key] = deepClone(obj[key]);
    }
  }
  return clone;
}

deepClone({ a: 1, b: { c: 2 } }); // {a: 1, b: {c: 2}}
deepClone([1, 2, 3]); // [1, 2, 3]
deepClone({ a: 1, b: [2, 3] }); // {a: 1, b: [2, 3]}
deepClone({ a: 1, b: { c: 2, d: [3, 4] } }); // {a: 1, b: {c: 2, d: [3, 4]}}
deepClone({ a: 1, b: { c: 2, d: [3, 4] }, e: [5, 6] }); // {a: 1, b: {c: 2, d: [3, 4]}, e: [5, 6]}
