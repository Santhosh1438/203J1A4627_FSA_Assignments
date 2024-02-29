console.log("Interfaces");
interface Person{name:string,age:number,email:string};
let user=(point:Person)=>{console.log(point);
console.log(point.name);};
user({
    name:'santhosh',
    age:20,
    email:'santhoshkaredla1438@gmail.com'
})
