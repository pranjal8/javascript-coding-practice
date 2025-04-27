let user = {
  name: "John",
  age: 30,
};
let admin = Object.assign({}, user);
let admin2 = { ...user };

console.log(admin, admin2);
console.log(user);
console.log(admin !== user); // true
console.log(admin2 !== user); // true
