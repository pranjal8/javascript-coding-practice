// function x() {
//   for (let i = 0; i <= 5; i++) {
//     setTimeout(function () {
//       console.log(i);
//     }, 1000);
//   }

//   console.log("HI closure example");
// }

// x()

//*****************************  */

// function x() {
//   for (var i = 0; i <= 5; i++) {
//     setTimeout(function () {
//       console.log(i);
//     }, 1000);
//   }

//   console.log("HI closure example");
// }

// x()

//*****************************  */

function x() {
  for (var i = 0; i <= 5; i++) {
    
    function close(currentIdx) {
      setTimeout(function () {
        console.log(currentIdx);
      }, currentIdx * 1000);
    }

    close(i);
  }

  console.log("This is closure example");
}

x();
