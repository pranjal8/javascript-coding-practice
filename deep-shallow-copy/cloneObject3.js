let user = {
  name: "John",
  age: 30,
};

let clone = {};

for (let key in user) {
  clone[key] = user[key];
}
clone.name = "Pete"; // now clone is a fully independent object with the same content
console.log(user.name); // still John in the original object

/* 
In your example, the for...in loop is used to create a shallow copy of the user object, not a deep copy. However, in this specific case, since the properties of user are primitive values (name is a string and age is a number), the distinction between a shallow and deep copy is not apparent. The shallow copy works effectively.

Here’s the breakdown of the behavior:

1. Shallow Copy:

The clone object gets its own independent properties that match the original properties of the user object.
Modifying clone.name doesn't affect user.name, as strings (like "John") are primitive and are copied by value, not by reference.

2. Output:
clone.name = "Pete"; changes the name property only in the clone object.
console.log(user.name); still outputs "John" because the user object remains unaffected.

*/
