function large(n) {
  // let max=0
  let min = 9;
  while (n > 0) {
    let digit = n % 10;
    // if(max<digit)
    if (min > digit) {
      min = digit;
    }
    n = Math.trunc(n / 10);
  }
//   console.log(max);
console.log(min);

}
large(231);
