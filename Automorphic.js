function automorphic(n)
{
    let a=n*n
   let i=1
   let temp=n

     while(n>0)
     {
          i*=10
          n=Math.trunc(n/10)
     }

     if(a%i==temp)
     {
        console.log(true);
        
     }
     else{
        console.log(false);
        
     }
}
automorphic(25)