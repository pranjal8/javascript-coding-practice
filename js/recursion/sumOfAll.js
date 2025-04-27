function sumTo(n) {
    // let sum =0;
    // for(let i=0 ;  i<=n ; i++){
    //     sum += i
    // }
    // return sum;

    if (n == 1 ) return 1;
    return n + sumTo(n-1)

}

console.log(sumTo(100))