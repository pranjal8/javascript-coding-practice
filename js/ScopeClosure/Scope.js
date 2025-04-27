// var a = 100;
// let b=200;
// const c=300;

// {
//   //block
//   var a = 10;
//   let b = 20;
//   const c = 30;
//   console.log(a, b, c);
// }
// console.log(a, b ,c );

// ========= function scope   ==============
// var c = 1000;

// function x() {
//     var c = 10;
//     console.log(c);
//     window.c= 20;
// }
// x();
// console.log(c)

///======= Legal scope  =======///

// let a = 20;

// function x() {
//   var a = 30;
//   console.log(a);
// }
// x();
// console.log(a);

///======= Lexical scope  =======///

const a = 20;
{
  const a = 200;
  {
    const a = 2000;
    console.log(a);
  }
  console.log(a);
}

console.log(a);
