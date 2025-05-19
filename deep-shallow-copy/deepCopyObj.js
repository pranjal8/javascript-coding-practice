/* 
If the user object had nested objects or arrays as properties, a shallow copy would not suffice. 
Changes to nested objects in clone would affect the corresponding properties in user.
*/

/* You can use a method like structuredClone (modern), 
JSON.parse(JSON.stringify(object)), or a library like Lodash.
 */

let user = {
  name: "John",
  age: 30,
};

// Using structuredClone for deep copy
let deepClone = structuredClone(user);
deepClone.name = "Pete";

console.log(user.name); // Output: "John"
console.log(deepClone.name); // Output: "Pete"
