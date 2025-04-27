/* 
prime number is a number that is greater than 1 and divided by 1 or itself only. 
In other words, prime numbers can't be divided by other numbers than itself or 1. 
For example 2, 3, 5, 7, 11, 13, 17.... are the prime numbers.
*/

function isPrime(num){
    if(num < 2) return false;
    const sqrtNum = Math.sqrt(num);
    for (let i = 2; i < sqrtNum; i++){
        if(num % i === 0) return false;
    }
    return true;
}
