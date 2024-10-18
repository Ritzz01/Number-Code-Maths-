function fact(n)
{
    if(n==1 || n==0)
    {
        return 1
    }
    return n*fact(n-1)
}

for(let i=1;i<=10;i++)
{
    if(fact(i))
    {
        console.log(i ,fact(i));
        
    }
}

// let n=3
// let prod=1;

// for(let i=1;i<=n;i++)
// {
//     prod*=i
// }
// console.log(prod);
