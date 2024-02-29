var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.displayInfo = function () {
        console.log(this.make);
        console.log(this.model);
        console.log(this.year);
    };
    return Car;
}());
var p = new Car();
p.make = 'BMW GROUP';
p.model = 'BMW';
p.year = 1928;
p.displayInfo();
