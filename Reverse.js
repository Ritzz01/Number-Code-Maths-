function reverse(n)
{
     let temp=0
     let original=n
     while(n>0){
        let digit=n%10;
        temp=temp*10+digit
        n=Math.trunc(n/10)
     }
     console.log(temp);

     if(temp===original)
     {
        console.log("palindrom");
        
     }
     else{
        console.log("not pallindrom");
        
     }
     
}
reverse(121)