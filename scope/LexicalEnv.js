function a() {
  var x = 100;
  c();

  function c() {
    console.log(b, x);
  }
  
}

var b = 10;
a();
