function outer(msg) {
  let a = 8;
  function inner(b) {
    console.log(msg, a, b);
  }
  return inner;
}
outer("Hello Pranjal, Your birthday on")(2);


/* 

function outer(msg) {
  let a = 8;
  function inner() {
    console.log(msg, a, b);
  }
  return inner;
}
outer("Hello Pranjal, Your birthday on")();

*/

