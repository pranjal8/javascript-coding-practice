/* 
The module pattern uses closures to create private variables and methods, exposing only a public API. 
This is common in frontend code for encapsulating logic.
*/

function createUserProfile() {
  let name = "John";
  let age = 12;

  return {
    setName(newName) {
      name = newName;
    },
    sessionStorage(newAge) {
      age = newAge;
    },
    getProfile() {
      return { name, age };
    },
  };
}

const profile = createUserProfile();
console.log(profile.getProfile());

/* 
Explanation: The name and age variables are private, accessible only through the returned object's methods. 
The closure ensures that setName, setAge, and getProfile retain access to name and age.

*/
