function outest() {
  let b = "sep";

  function outer(msg) {
    function inner() {
      console.log(msg, a, b);
    }
    let a = 8;
    return inner;
  }

  return outer;
}

let a=100;
console.log(a)

var close= (outest())("Hello")
close()

outest()("Hello Pranjal, Your birthday on")();

//  *********************************** */

// function outer(msg) {
//   let a = 8;
//   function inner() {
//     console.log(msg, a, b);
//   }
//   return inner;
// }
// outer("Hello Pranjal, Your birthday on")();
