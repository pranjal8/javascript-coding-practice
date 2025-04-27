/*
1) Here, Object.entries returns the array of key/value pairs: [ ["name","John"], ["age", 30] ]. That’s what Map needs.
2) There’s Object.fromEntries method that does the reverse: given an array of [key, value] pairs, it creates an object from them:
--> We can use Object.fromEntries to get a plain object from Map.

*/

let obj = {
  name: "John",
  age: 30,
};

let map = new Map(Object.entries(obj));

alert(map.get("name")); // John


let prices = Object.fromEntries([
    ['banana', 1],
    ['orange', 2],
    ['meat', 4]
  ]);
  
  // now prices = { banana: 1, orange: 2, meat: 4 }
  
  alert(prices.orange); // 2