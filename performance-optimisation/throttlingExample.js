let timer;

function throttle(func, delay) {
  return function (...args) {
    if (!timer) {
      timer = setTimeout(() => {
        func(...args);
        timer = null;
      }, delay);
    }
  };
}


// Example usage
const handleScroll = throttle((e) => {
    console.log("Input throttled:", e.target.value);
    console.log('Scroll position:', window.scrollY);
}, 200);

window.addEventListener('scroll', handleScroll);