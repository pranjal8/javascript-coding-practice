

console.log(this); //Global Context --> // window object

//Inside regular function
function myFunction() {
  console.log(this);
}
myFunction(); // window object
