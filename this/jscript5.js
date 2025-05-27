 function Car() {
    this.brand = "Toyota";
    this.modelName = "Camry";
    console.log("Here this refers to", this);
}

Car.prototype.getCarInfo = function() {
    console.log("getCarInfo this refers to", this);
    console.log(`Car Brand is ${this.brand} and model is ${this.modelName}`);
};

function Car(brandName, model) {
    this.brand = brandName;
    this.modelName = model;
    console.log("Here this refers to", this);
}

Car.prototype.getCarInfo = function() {
    console.log("getCarInfo this refers to", this);
    console.log(`Car Brand is ${this.brand} and model is ${this.modelName}`);
};

let car = new Car("Toyota", "Camry");
car.getCarInfo();

function Car(brandName, model, color) {
    this.brand = brandName;
    this.modelName = model;
    this.colorName = color;
}

Car.prototype.getCarInfo = function() {
    console.log("getCarInfo this refers to", this);
    console.log(`Car Brand is ${this.brand}, model is ${this.modelName}, and color is ${this.colorName}`);
};

let ToyotaCar = new Car("Toyota", "Camry", "Red");
ToyotaCar.getCarInfo();
console.log("......................................................");
 let hondaCar = new Car("Honda", "Civic", "Blue");
hondaCar.getCarInfo();