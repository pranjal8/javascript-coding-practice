let timer;

function debounce(fn, delay) {
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => 
      fn(...args)
    , delay);
  };
}

const searchBar = debounce((e) => {
  console.log("API call with query:", e.target.value);
}, 2000);

document.getElementById('search').addEventListener('input' , searchBar)