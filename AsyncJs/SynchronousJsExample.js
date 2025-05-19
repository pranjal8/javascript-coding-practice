/* 
During the 5 seconds that someLongRunningFunction() is being executed, the program will be blocked, become unresponsive, and be unable to execute the next line of code. This can cause the program to take a long time to complete and make the application unresponsive to the user.

1. The program starts by logging "Starting..." to the console.
2. Then it calls the someLongRunningFunction, which simulates a long-running task that takes 5 seconds to complete. This function will block the execution of the rest of the program while it runs.
3. Once the function completes, it will return "Hello", and the program will log it on the console.
4. Finally, the program will log "Finishing" to the console
*/

function someLongRunningFunction(params) {
   let startDate= Date.now();
   
   while (Date.now() - startDate < 5000 ) {
     console.log("INside function")
   }
   return "Hello";
}

console.log("Starting...");

let result= someLongRunningFunction();
console.log(result);
console.log('.....finishing')


