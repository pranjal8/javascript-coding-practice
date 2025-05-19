/* 
Two parallel call at same time Using promise and axios both.  
Result will be in a blocking way
*/

const axios = require('axios');

// Function to fetch user data
function fetchUser(userId) {
  return axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then(response => response.data)
    .catch(error => { throw new Error(`User fetch error: ${error.message}`); });
}

// Function to fetch posts data
function fetchPosts(userId) {
  return axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
    .then(response => response.data)
    .catch(error => { throw new Error(`Posts fetch error: ${error.message}`); });
}

console.log("Start");

// Parallel API calls using Promise.all
Promise.all([fetchUser(1), fetchPosts(1)])
  .then(([user, posts]) => {
    // This block executes only after both promises resolve
    console.log("User:", user.name);
    console.log("Number of posts:", posts.length);
  })
  .catch(error => {
    // Handle any error from either promise
    console.error("Error:", error.message);
  })
  .finally(() => {
    console.log("Done");
  });

console.log("End");