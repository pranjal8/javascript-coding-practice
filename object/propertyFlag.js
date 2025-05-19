let user={
    name: "John"
}

let descriptor= Object.getOwnPropertyDescriptor(user,"name");
console.log(descriptor)

let user2 = {};
Object.defineProperty(user2, "name", {
  value: "John"
});




