/* Approach 1 --> O(n^2) */
const array = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

function maxSubArraySum(arr) {

    let maxSum=0;

    for(let i=0; i<arr.length; i++){
        let sum= 0;
        for(let j=i; j<arr.length; j++){
            sum = sum + arr[j];
            maxSum = Math.max(maxSum, sum)
        }
    }

    return maxSum;
}

console.log(maxSubArraySum(array)); // 6

/* Approach 2 --> O(n) */

function maxSubArraySum2(arr) {
   
    let maxSum =0; 
    let partialSum =0;

    for (const item of arr) {
        partialSum = partialSum + item; 

        maxSum = Math.max(maxSum, partialSum)

        if(partialSum<0){
            partialSum = 0;
        }
    }
    return maxSum
}