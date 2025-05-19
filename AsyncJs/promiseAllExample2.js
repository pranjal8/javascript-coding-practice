let urls = [
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/albums",
];

let request = urls.map((url) => fetch(url));

console.log(request);

Promise.all(request).then((responses) => {
  responses.forEach((item) => {
    console.log(item.url + " : " + item.status);
  });
});
