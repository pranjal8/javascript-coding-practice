// Function that returns a Promise
function fetchData(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userId > 0) {
        resolve({ id: userId, name: `User ${userId}` });
      } else {
        reject("Invalid user ID");
      }
    }, 1000);
  });
}

// Using the Promise
console.log("Start");

// Basic Promise usage
fetchData(1)
  .then((user) => {
    console.log("Got user:", user);
    // Chain another Promise
    return fetchData(2);
  })
  .then((secondUser) => {
    console.log("Got second user:", secondUser);
  })
  .catch((error) => {
    console.error("Error:", error);
  })
  .finally(() => {
    console.log("Done");
  });

console.log("End");

// Async/await version
async function getUsers() {
  try {
    const user1 = await fetchData(1);
    console.log("Async user:", user1);
    const user2 = await fetchData(2);
    console.log("Async second user:", user2);
  } catch (error) {
    console.error("Async error:", error);
  }
}
getUsers();

/* Q: How would you handle multiple Promises concurrently? */

Promise.all([fetchData(1), fetchData(2)])
  .then(([user1, user2]) => console.log(user1, user2))
  .catch((error) => console.error(error));
