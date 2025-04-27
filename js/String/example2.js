let str = "12099875432444";

//Approach 1

/* 
let res = ''
for(let i=0; i<str.length; i++){
  if(str[i] === '4'){
    res += '2'
  }else{
    res += str[i]
  }
}
console.log(res) 

*/

//Approach 2
let res = str.split("4");
console.log("original String-->" + str);
console.log("new String -->", res.join("2"));
