const fetchPromise = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
);
// fetch() returns while the request is still going on, enabling our program to stay responsive.
console.log(fetchPromise);

fetchPromise
  .then((response) => response.json())
  .then((data) => {
    console.log(data[0].name);
  });

console.log("Started request...");
    