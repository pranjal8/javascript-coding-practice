function generatePrimesUpTo(n) {
  const primes = [];

  function isPrime(num) {
    if (num <= 1) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;

    const sqrtNum = Math.sqrt(num);
    for (let i = 3; i <= sqrtNum; i += 2) {
      if (num % i === 0) return false;
    }
    return true;
  }

  for (let i = 2; i <= n; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }

  return primes;
}

// Example usage:
const primesUpTo50 = generatePrimesUpTo(50); // Generates all primes up to 50
console.log(primesUpTo50); // [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47]
