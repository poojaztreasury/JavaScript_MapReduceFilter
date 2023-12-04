const radius= [2,4,6,8];
area(radius);
great4(radius);
sumofarray(radius);
function area(radius)
{
  const area=  radius.map((x)=> Math.PI*x*x); //map function
    console.log(area);
}
function great4(radius)
{
    const output = radius.filter( x=> x>4); //filter function
    console.log(output);
}
function sumofarray(r)
{
    let sum=0;
    const res= r.reduce(function(sum,curr){   //reduce function
         sum=sum+curr;
         return sum;
    },0)
    
    console.log(res);
}