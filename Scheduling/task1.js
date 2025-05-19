/* 
Write a function printNumbers(from, to) that outputs a number every second, starting from from and ending with to.
*/

// Solution 1

function printNumbers(from, to) {
  let current = from;

  let timerId = setInterval(function () {
    console.log(current);

    if (current == to) {
      clearInterval(timerId);
    }

    current++;
  }, 1000);
}
printNumbers(1, 10);

// Solution 2
function printNumbers(from, to) {
    let current = from;
  
    setTimeout(function go() {
        console.log(current);
        if (current < to) {
          setTimeout(go, 1000);
        }
        current++;
      }, 1000);
    

  }
printNumbers(5, 10);

// Solution 3
function printNumbers(from, to) {
    let current = from; 
    function go() {
      console.log(current);
      if (current == to) {
        clearInterval(timerId);
      }
      current++;
    } 
    go();
    let timerId = setInterval(go, 1000);
  }
  
  printNumbers(5, 10);