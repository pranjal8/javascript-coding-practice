class User {
  constructor(name, age) {
    (this.name = name), (this.age = age);
  }

  sayHi() {
    console.log(this.name + " said Hi" + " and he is " + this.age + " years old");
  }
}

let user =new User('John', 25);
user.sayHi()
console.log( typeof User) // function

console.log(User === User.prototype.constructor) // true
console.log(User.prototype.sayHi) //code of sayHi method

console.log(Object.getOwnPropertyNames(User.prototype)) // ['constructor', 'sayHi']