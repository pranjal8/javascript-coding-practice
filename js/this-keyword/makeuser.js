"use strict";
function makeUser() {
  return {
    name: "john",
    ref() {
      return this;
    },
  };
}

console.log(makeUser().ref()); // { name: 'john', ref: [Function: ref] }
console.log(makeUser().ref.name); // ref
console.log(makeUser().ref().name); // john
