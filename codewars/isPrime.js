const isPrime = (num) => {
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
};
console.log(isPrime(482696639));

let number = 1600462937
number / 2 === 0 ? console.log(false) : console.log(true)