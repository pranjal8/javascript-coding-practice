/* 
Input: "leetcode"
Output: 0 (l is the first non-repeating character)
Input: "loveleetcode"
Output: 2 (v is the first non-repeating character)
*/

//Approach 1: Using Object
// Time Complexity: O(n)
// Space Complexity: O(n)
// Explanation:
// 1. Create an object to store the count of each character.
// 2. Iterate through the string and populate the object with character counts.
// 3. Iterate through the string again and check the object for the first character with a count of 1.
// 4. Return the index of that character.
// 5. If no such character is found, return -1.

/* function firstNonRepeatingChar(str) {
  const count = {};
  for (let i of str.toLowerCase()) {
    count[i] = (count[i] || 0) + 1;
  }

  for (let char of str.toLowerCase()) {
    if (count[char] === 1) {
      return char;
    }
  }
  return null;
} */

//Approach 2: Using Map
function firstNonRepeatingChar(str) {
  const charMap = new Map();

  for (let char of str.toLowerCase()) {
    charMap.set(char, (charMap.get(char) || 0) + 1);
  }
  for (let [key, value] of charMap) {
    if (value === 1) {
      return key;
    }
  }
  console.log(charMap);
  return null;
}

console.log(firstNonRepeatingChar("aabbcdee"));
console.log(firstNonRepeatingChar("xxyz")); // Output: "y"
console.log(firstNonRepeatingChar("aabbcc"));
