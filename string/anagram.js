/* 
Write a function to check whether two given strings are anagram of each other or not. An anagram of a string is another string that contains the same characters, only the order of characters can be different. For example, “abcd” and “dabc” are an anagram of each other.
*/

function isAnagram(s1,s2){
    if (s1.length !== s2.length) return false;

    if(s1.split("").sort().join('') === s2.split('').sort().join('')){
        return true
    }
    
    return false;
}

const ans =isAnagram("listen", "silent")

console.log(ans)

console.log(isAnagram("hello", "world"));   // false
console.log(isAnagram("aabbcc", "baccab")); // true