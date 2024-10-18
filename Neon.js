function neon(n) {
  let a = n * n;
  let temp = n;
  let sum = 0;
  while (a > 0) {
    let digit = a % 10;
    sum += digit;
    a = Math.trunc(a / 10);
  }
  if(sum==temp)
  {
    console.log("neon");
    
  }
  else{
    console.log("Not neon");
    
  }
}

neon(9)