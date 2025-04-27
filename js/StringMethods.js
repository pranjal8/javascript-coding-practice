const str = "Mozilla";
console.log(str.length, str[str.length - 1]);

/* ====================== */
/* string contains substrig ==> 
   includes() 
   method return true or false 
*/

if (str.includes("Zilla")) console.log("Found Zilla");
else console.log("Not found");

str.includes("zilla")
  ? console.log("Found zilla!")
  : console.log("No zilla here!");

/* ====================== */
/* Often you'll want to know if a string starts or ends with a particular substring. 
  startsWith()
  endsWith()
*/

if (str.startsWith("zilla")) {
  console.log("Found zilla!");
} else {
  console.log("No zilla here!");
}

if (str.endsWith("zilla")) {
  console.log("Found zilla!");
} else {
  console.log("No zilla here!");
}

/* ====================== */
/* Finding the position of a substring in a string 
   indexOf(sunstring, starting position) 
   returns -1 if not present 
     or
   index of first occurance of string
*/

const tagLine = "MDN - Resources for developers, by developers";
console.log(tagLine.indexOf("developers"));
console.log(tagLine.indexOf("x")); 
const secondOccurance = console.log(tagLine.indexOf('developers' , tagLine.indexOf('developers') + 1 ))