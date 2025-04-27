function askPassword(ok, fail) {
  let password = prompt("Password?", "");
  if (password === "rock") ok();
  else fail();
}

let user = {
  name: "John",
  loginOk() {
    console.log(this.name, "logged in");
  },
  loginFail() {
    console.log(this.name, "failed to log in");
  },
};

/* 
When you pass user.loginOk and user.loginFail as arguments to the askPassword function, 
they are no longer bound to the user object. 
Instead, they are passed as standalone functions. 
When these functions are later called inside askPassword (e.g., ok() and fail()), 
the this inside them is undefined in strict mode (or the global object in non-strict mode).
Thus, when this.name is accessed in loginOk() or loginFail(), 
it throws an error because this is not pointing to the user object.
*/
/* 
When askPassword calls these functions (ok() or fail()), 
the this context inside user.loginOk or user.loginFail is lost because they are called as regular functions, not as methods of user.
*/
askPassword(user.loginOk, user.loginFail); //Error


askPassword(user.loginOk(), user.loginFail()); //  
/* 
Function Execution Instead of Passing as a Callback:
In JavaScript, when you write user.loginOk() or user.loginFail(), the functions are immediately executed, not passed as callbacks.
This results in askPassword receiving the return values of user.loginOk() and user.loginFail(), rather than references to the functions themselves. Since these methods don’t explicitly return anything, their return value is undefined.
Expected Behavior:
askPassword expects two function references as arguments: ok and fail. However, you are passing the results of the execution of user.loginOk() and user.loginFail(), which are undefined.
*/

askPassword(
  () => user.loginOk(),
  () => user.loginFail()
); //It works

askPassword(user.loginOk.bind(user), user.loginFail.bind(user)); //It works