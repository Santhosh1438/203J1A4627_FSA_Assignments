class Car{
    make:string;
    model:string;
    year:number;
    displayInfo(){
        console.log(this.make);
        console.log(this.model);
        console.log(this.year);
    }
}
let p=new Car();
p.make='BMW GROUP';
p.model='BMW';
p.year=1928;
p.displayInfo();
