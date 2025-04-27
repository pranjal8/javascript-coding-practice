
const user = {
  name: "Pranjal",
  age: 30,
  sayHello() {
    console.log("Hello " + this.name);
  },
};

const admin={name:"admin"}

function sayHi() {
  console.log("Hi "+ this.name );
};

user.f = sayHi;
admin.f= sayHi;

user.f() // Hi Pranjal
admin['f']() // Hi admin


function greeting(){
    console.log(this)
}
greeting()
