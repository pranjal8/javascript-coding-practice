function createPerson(name) {
  const obj = {};
  obj.name = name;
  obj.introduceSelf = function () {
    console.log(this);
    console.log(`Hi! ${this.name}`);
  };

  return obj;
}

const salva = createPerson("Slavia");
salva.introduceSelf();
const frankie = createPerson("Verna");
frankie.introduceSelf();

/* 
This works fine but is a bit long-winded: we have to create an empty object, initialize it, and return it.
________________________________________________________________________________

better way is to use a constructor. A constructor is just a function called using the new keyword.

When you call a constructor, it will:
1. create a new object
2. bind this to the new object, so you can refer to this in your constructor code
3. run the code in the constructor
4. return the new object.

*/

function Person(name) {
  this.name = name;
  this.introduceSelf = function () {
    console.log(`Hi! ${this.name}`);
  };
}
//To call Person() as a constructor, we use new:

const obj1 = new Person("Pranjal");
const obj2 = new Person("Aman");
const obj3 = new Person("Varun");

console.log(obj1, obj2, obj3)