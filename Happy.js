function happy(n)
{
        while(n>9)
        {
            let sum=0

            while(n>0)
            {
                let digit=n%10
                sum+=digit**2
                n=Math.trunc(n/10)
            }
            n=sum
            
        }
        console.log(n);

}
happy(17)