function add(a, b, c, ...d) {
  console.log(arguments);
  // let res = a + b + c;
  // for (let i = 0; i < d.length; i++) {
  //   res = res + d[i];
  // }
  // return res;
 
  let res = 0;
  for (const element of arguments) {
    res += element;
  }
  return res;
}

const ans = add(1, 2, 3, 4, 5);
console.log(ans);
