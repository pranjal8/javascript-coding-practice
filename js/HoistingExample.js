console.log(x === undefined);
var x = 3;

(function () {
  console.log(x);
  var x = "local scope";
})();

{
  console.log(x);
  var x = 5;
}

console.log(x);
