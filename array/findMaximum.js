const arr=[1,3,5,7,22,9]

const maxNum = Math.max(...arr)
console.log(maxNum)

arr.reduce((max, current)=> current > max ? current : max ,  arr[0])
console.log(maxNum)