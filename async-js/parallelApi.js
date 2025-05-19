/* 
Two parallel call at same time Using promise and axios both.  
Result will be in a blocking way
*/


const axios = require('axios');

// Function to fetch user data from an API (mocked with JSONPlaceholder)
function fetchUser(userId) {
  return axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then(response => response.data)
    .catch(error => Promise.reject(error.message));
}

// Function to fetch user posts from an API
function fetchPosts(userId) {
  return axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
    .then(response => response.data)
    .catch(error => Promise.reject(error.message));
}

// Main function to make parallel calls in a blocking way
async function fetchDataInParallel(userId) {
  console.log("Starting parallel API calls...");

  try {
    // Use Promise.all to run both API calls in parallel
    const [user, posts] = await Promise.all([
      fetchUser(userId),
      fetchPosts(userId)
    ]);

    // Log results (execution is blocked until both calls complete)
    console.log("User Data:", user);
    console.log("User Posts:", posts);

    return { user, posts };
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

// Execute the function
fetchDataInParallel(1)
  .then(result => console.log("Combined Result:", result))
  .catch(error => console.error("Failed:", error))
  .finally(() => console.log("Done"));