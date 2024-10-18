// function fib(n)
// {
//     if(n==1 ||n==2)
//     {
//         return 1
//     }
//     return fib(n-1)+fib(n-2)
// }

// for(let i=1;i<=10;i++)
// {
//     if(fib(i))
//     {
//         console.log(i ,fib(i));

//     }
// }

function fibo(n) {
  let a = 0;
  let b = 1;
  let c = 0;
  if (n == 0 || n == 1) return a;
  if(n==2) return b
  for (let i = 3; i <= n; i++) {
    c = a + b;
    a = b;
    b = c;
  }
  return c;
}

// for (let i = 1; i <= 10; i++) {

//     console.log(fibo(i));
 
// }



let count=0
for (let i = 1; i <= 10; i++) {

    if(count%2==0)
    {
        console.log(fibo(i));

    }
    count++
 
}
