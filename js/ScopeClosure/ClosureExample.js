// function x() {
//   let a= 8;
//   function y() {
//     console.log(a)
//   }
//   y();
// }

// x();

//===================//

// function x() {
//   let a = 8;
//   function y() {
//     console.log(a);
//   }
//   return y;
// }

// let result =x();
// console.log(result)
// result();

//===================//

function parent() {
  let b = 800;

  function x() {
    let a = 8;

    function y() {
      console.log(a, b);
    }
    y();
  }

  return x();
}

let ans = parent();
console.log(ans());

//==============================

// function x() {
//   let a = function y() {
//     console.log(" \Inside y\ :  Namaste");
//   };
//   a();

//   let b = 2;
//   return function z() {
//     console.log(" \Inside z\ : ", b);
//   };
// }

// let res= x();

// console.log(res)
// console.log(res())

//===================//
