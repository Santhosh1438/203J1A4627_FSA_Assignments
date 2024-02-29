function add(n1:number,n2:number){
    return n1+n2;
}
let a=add(10,20);
console.log("sum of two numbers using normal function: "+a);
console.log("Arrow function");
let b=(a:number,b:number):number=>{return a+b;};
console.log(b(10,20));
console.log("CAPITALIZE LETTERS IN STRING");
let str=(s:string)=>{return (s as string).toLocaleUpperCase()};
console.log(str('akrivia'));
function capitalize(s:string)
{
console.log(s.toLocaleUpperCase());
}
capitalize('akrivia company');
