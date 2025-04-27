
//console.log(a) //Reference Error
console.log(b) //undefined
print();


let a = 10;
var b = 40;

function print(params) {
  console.log(b)
  var b=30;
  console.log(b) 
} 
console.log(b)

const val= function (params) {
  console.log("first")
}
val()