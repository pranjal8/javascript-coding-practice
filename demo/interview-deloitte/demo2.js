arr1 = ["name1", "name2", "name3"];
arr2 = ["name5", "name4"];

function isSameName(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      return arr1.includes(arr2[j]);
    }
  }
}
const res = isSameName(arr1, arr2);
console.log(res);

