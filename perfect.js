function perfect(n) {
  let sum = 0;
  for (let i = 1; i < n; i++) {
    if (n % i == 0) {
      sum += i;
    }
  }
  // console.log(sum);

  return sum == n;
}

// perfect(6)

function main() {
  for (let i = 1; i < 100; i++) {
    if (perfect(i)) {
      console.log(i);
    }
  }
}
main();
