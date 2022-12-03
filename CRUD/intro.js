// conditional if else in javaScript 
// is prime
let num = 34945;
let isPrime = true;

for(let i = 2; i*i <= num; i++) {
    if (num % i == 0) {
        isPrime = false;
    }
}

if(isPrime == true) {
    console.log("Number is prime");
}
else {
    console.log("not prime number");
}