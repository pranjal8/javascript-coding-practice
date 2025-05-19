//GET - Retrieve data/resource

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((res) => {
    res.json();
  })
  .then((data) => console.log(data))
  .catch((err) => {
    console.log(err);
  });

//POST - create new resource
fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    title: "foo",
    body: "bar",
    userId: 1,
  }),
})
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

//PUT  - update entire data
//PUT replaces the whole resource. You must send the full updated object.

fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    id: 1,
    title: "updated title",
    body: "updated body",
    userId: 1,
  }),
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error updating post:", error));

//PATCH (Update partial data)
//PATCH partially updates the resource. Only send the fields you want to change.
fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "PATCH",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    title: "partially updated title",
  }),
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error patching post:", error));

//DELETE - DELETE is used to remove a resource.
fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "DELETE",
})
  .then((response) => {
    if (response.ok) {
      console.log("Deleted successfully");
    } else {
      console.error("Failed to delete");
    }
  })
  .catch((error) => console.error("Error deleting post:", error));




/* 
1. Why JSON.stringify() ?
When you send data to the server (like in a POST, PUT, PATCH),
the server expects data in a JSON string format — not a JavaScript object.
So JSON.stringify() is used to convert JavaScript object into a JSON string before sending.



2. Why response.json() ?
When you receive a response from an API,
it’s usually raw HTTP data — not directly a JavaScript object.
You need to convert the raw response into a usable JavaScript object.

const response = await fetch('/api/users');
const data = await response.json();  // converts JSON text -> JS object
console.log(data);

So response.json() is used to parse JSON string into a JavaScript object.

*/

/* 
JSON.stringify() → JavaScript object → JSON string (for sending data).

response.json() → JSON string → JavaScript object (for reading response).

Content-Type: application/json → Tells server "I'm sending JSON data."

*/

/* 
FormData()

*/