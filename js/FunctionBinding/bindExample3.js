function askPassword(ok, fail) {
  let password = prompt("Password?", "");
  if (password == "rockstar") ok();
  else fail();
}

let user = {
  name: "John",

  login(result) {
    console.log(this.name + (result ? " logged in" : " failed to log in"));
  },
};

//solution 1: Either use a wrapper function, an arrow to be concise:
askPassword(() => user.login(true), () => user.login(false));

//solution 2: create a partial function from user.login that uses user as the context and has the correct first argument:
askPassword(user.login.bind(user, true), user.login.bind(user, false));