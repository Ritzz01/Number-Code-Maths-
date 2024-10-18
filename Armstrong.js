function Armstrong(n) {
  let length = 0;
  let temp = n;
  let sum = 0;
  while (n > 0) {
    length++;
    n = Math.trunc(n / 10);
  }
  n = temp;

  while (n > 0) {
    let fact = 1;
    let digit = n % 10;

    for (let i = 1; i <= length; i++) {
      fact *= digit;
    }

    sum += fact;
    n = Math.trunc(n / 10);
  }

  if (sum == temp) {
    console.log("Armstrong");
  } else {
    console.log("Not Armstrong");
  }
}
Armstrong(153);
