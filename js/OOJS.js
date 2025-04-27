const person = {
  /* Object properties */
  // name: ["Bob", "Smith"],
  name: {
    first: "Bob",
    last: "Smith",
  },
  age: 29,

  /* Object methods - To do something with object properties*/
  bio: function (params) {
    console.log(
      ` ${this.name.first}  ${this.name.last}  is ${this.age} year old `
    );
  },
  introduceSelf() {
    console.log(`Hi1 I'm ${this.name.first}`);
  },
};

//   get
console.log(person.age);
console.log(person.bio());
console.log(person.introduceSelf());
console.log(person.name);
console.log(person["name"]["first"]);

//   Set
person.age = 35;

//   Add
person["eyes"] = "hazel";
person.farewell = function () {
  console.log("Bye everybody!");
};
const myDataName = "height";
const myDataValue = "1.75m";
person[myDataName] = myDataValue;

console.log(person);

 //\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

const person1 = {
  name: "Chris",
  introduceSelf() {
    console.log(`Hi! I'm ${this.name}.`);
  },
};

const person2 = {
  name: "Deepti",
  introduceSelf() {
    console.log(`Hi! I'm ${this.name}.`);
  },
};
person1.introduceSelf()
person2.introduceSelf()

