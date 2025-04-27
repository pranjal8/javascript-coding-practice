//Input: hello world
//output: world hello

function reverseOrder(str) {
  //let arr = str.split(" ");
  let arr = [];
  let res = " ";

  for (let i = 0; i < str.length; i++) {
       arr.push(str[i])
  }

  console.log(arr);

  for (let i = arr.length - 1; i >= 0; i--) {
    res += arr[i] + " ";
  }
  //   return arr.reverse().join(" ");
  return res;
}
const res = reverseOrder("hello world");
console.log(res);
