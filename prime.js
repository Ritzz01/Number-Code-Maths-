function prime(n) {
  if (n <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.trunc(n / 2); i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
}

function main() {
//   for (let i = 1; i <= 10; i++) {
//     if (prime(i)) {
//       console.log(i);
//     }
//   }


let start=3
for (let i = ++start; true; i++) {
    if (prime(i)) {
      console.log(i);
      break
    }
  }
}
main();
