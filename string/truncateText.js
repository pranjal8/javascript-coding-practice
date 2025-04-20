/* 
Create a function truncate(str, maxlength) that checks the length of the str and, if it exceeds maxlength – replaces the end of str with the ellipsis character "…", to make its length equal to maxlength.

The result of the function should be the truncated (if needed) string.
*/

function truncate(str, maxLen) {
    let len = str.length;
    console.log(len)
    return (len > maxLen) ? str.slice(0, maxLen-1) + '...' : str

    
}
const res =truncate("What I'd like to tell on this topic is:", 20)
let res2= truncate("Hi everyone!", 20)
console.log(res, res2)