function main(n)
{
      let odd=0
      let even=0

      while(n>0)
      {
        let digit=n%10
        if(digit%2==0)
        {
            even+=digit
        }
        else
        {
            odd+=digit
        }
        n=Math.trunc(n/10)
      }
      console.log(odd);
      console.log(even);
      
      
}

main(1234)