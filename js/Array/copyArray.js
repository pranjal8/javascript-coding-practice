let fruits = ["Apples", "Pear", "Orange"];
let shoppingCart = fruits;
shoppingCart.push("Banana");
console.log(fruits.length); // 4
/* 
That’s because arrays are objects. So both shoppingCart and fruits are the references to the same array.
*/

let arr = ["a", "b"];
arr.push(function () {
  alert(this);
});
arr[2](); // a,b,function(){...}

/* 
The call arr[2]() is syntactically the good old obj[method](), in the role of obj we have arr, and in the role of method we have 2.
So we have a call of the function arr[2] as an object method. Naturally, it receives this referencing the object arr and outputs the array: 
*/
