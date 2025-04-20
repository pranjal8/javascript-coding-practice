/*

To check if one string is a subsequence of another, you can use a two-pointer technique. A string s1 is a subsequence of string s2 if all characters of s1 appear in s2 in the same order (not necessarily contiguous).

s1 = "abc"
s2 = "ahbgdc"
Output: true (because a → h → b → g → d → c contains a, b, c in order)

*/

function isSubsequence(str1, str2) {
  let i = 0,
    j = 0;
  while (i < str1.length && j < str2.length) {
    if (str1[i] === str2[j]) {
      i++;
    }
    j++;
  }

  return i === str1.length;
}

console.log(isSubsequence("abc", "ahbgdc"));
console.log(isSubsequence("axc", "ahbgdc"));
console.log(isSubsequence("", "ahbgdc"));
