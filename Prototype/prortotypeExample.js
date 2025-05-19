let user = {
  name: "John",
  surname: "Doe",

  set fullName(value) {
    [this.name, this.surname] = value.split(" ");
  },

  get fullName() {
    return `${this.name} ${this.surname}`;
  },
};

let admin={
    __proto__ : user,
    isAdmn: true
}

console.log(admin.fullName);
admin.fullName= "Alice Cooper";  //// Alice Cooper, state of admin modified
console.log(admin.fullName, user.fullName); //// John Smith, state of user protected


