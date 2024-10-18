function strong(n) {
  let sum = 0;
  let temp = n;

  while (n > 0) {
    let fact = 1;
    let digit = n % 10;

    for (let i = 1; i <= digit; i++) {
      fact *= i;
    }
    sum += fact;

    n = Math.trunc(n / 10);
  }

  if (temp == sum) {
    console.log("true");
  } else {
    console.log("false");
  }
}
strong(145);
