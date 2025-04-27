/* Check if "cat" and "dog" appear an equal number of times in a string */
function checkString(str) {
  let catCount = 0;
  let dogCount = 0;

  for (let i = 0; i < str.length - 2; i++) {
    if (str.slice(i, i + 3) === 'cat') {
        catCount++;
    }
    if (str.slice(i, i + 3) === 'dog') {
        dogCount++;
    }
  
  }
  return catCount === dogCount;
}

console.log(checkCatDog("catdog"));        // true (1 "cat", 1 "dog")
console.log(checkCatDog("catcatdog"));     // false (2 "cat", 1 "dog")
console.log(checkCatDog("catdogcatdog"));  // true (2 "cat", 2 "dog")
console.log(checkCatDog("dogdogcat"));