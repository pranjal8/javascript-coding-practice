
// {
// a:2
// c:4
// x:1
// d:2
// }


function CharCount(str){
    let count = {};
    for(let i of str ){
        count[i] = (count[i] || 0) +1 
    }
       return count

}

let name2 = "acccddxbbac";
const res= CharCount(name2)
console.log(res)



let x = {};
x.a = 'apple';
 
let y = x; 

y.a = 'mango';
 
console.log(x.a) 