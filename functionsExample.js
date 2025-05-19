var x = 1;
a(), b();
console.log(x);


function a() {
  var x = 10;
  console.log(x);
  //Local space
}

function b() {
  var x = 100;
  console.log(x);
  //Local Space
}


//global space