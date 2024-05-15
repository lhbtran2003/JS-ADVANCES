
function isPrime(num) {
    if(num <= 1) return false
    if(num <= 3) return true
    if(num % 2 == 0 && num % 3 == 0) return false
    for(let i=0; Math.pow(i,2)<=num; i+=6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
}

function hasPrimeNumber(arrInterger) {
    arrInterger.every(number => isPrime(number) )
}