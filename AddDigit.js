function add(n)
{
    let sum=0

    while(n>0)
    {
        let temp=n%10;
        sum+=temp;
        n=Math.trunc(n/10)
    }

    console.log(sum)
}
add(123)