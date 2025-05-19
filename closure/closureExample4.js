function parent() {
    let b = 800;
  
    function x() {
      let a = 8;
  
      function y() {
        console.log(a, b);
      }
      y();
    }
  
    return x;
  }
  
  let ans = parent();
  console.log(ans());