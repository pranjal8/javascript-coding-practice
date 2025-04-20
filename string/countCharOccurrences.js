/* 
Input: "hello"
Output: { h: 1, e: 1, l: 2, o: 1 }
*/
function charCount(str) {
    const counts={};
    for(let char of str.toLowerCase()){
        counts[char] = (counts[char] || 0) + 1
        console.log(counts[char])
    }
    return counts;
}

console.log( charCount("hello"))