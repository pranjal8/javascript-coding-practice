function fetchData(callback) {
  setTimeout(() => {
    const data = { name: "Pranjal", age: 29 };
    callback(data)
    console.log("Inside Function")
  }, 3000);
}

fetchData( function(data) {
    console.log("hii",data)
} )


console.log("Data is being fetched...")

/* 

1. What is a Callback? A callback is simply a function passed as an argument to another function. 
In this case, callback is a function that you want to run after fetchData completes its work (i.e., after it "fetches" the data with a 3-second delay).

2. The Role of callback as a Parameter: When defining fetchData, we write callback as a parameter in its parentheses, like this:
function fetchData(callback) { ... }
This means fetchData expects a function to be passed in as callback when it’s called.

3. Executing the Callback with Data: Inside fetchData, after the 3-second setTimeout delay, we create a data object:
   const data = { name: "Pranjal", age: 29 };
   
   Then, we execute the callback with the data object as an argument:
   callback(data);
   
   This means that the function passed to fetchData will now be executed, and data will be passed to that function. 

4. Where the Argument Goes
   When fetchData is called, you will pass a function as the callback argument:
   
   fetchData(function(data) {
     console.log("hii", data);
   });

   Here:
   The anonymous function function(data) { console.log("hii", data); } is passed as callback to fetchData.
   Inside fetchData, when we call callback(data), this anonymous function gets executed, and data (i.e., { name: "Pranjal", age: 29 }) is passed to it as an argument.


*/