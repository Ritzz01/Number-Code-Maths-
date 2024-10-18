function neon(a) {
   
    let temp = a;
    let sum = 0;
    let product=1
    while (a > 0) {
      let digit = a % 10;
      sum += digit;
      product*=digit
      a = Math.trunc(a / 10);
    }
    if(sum==product)
    {
      console.log("neon");
      
    }
    else{
      console.log("Not neon");
      
    }
  }
  
  neon(6)