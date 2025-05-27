function Phone(){
    this.brand = "Apple";
    this.modelName = "iphone14";
    console.log("Here this refers to", this);
    
}

Phone.prototype.getPhoneInfo = function() {
    console.log("getPhoneInfo this refers to", this);
    console.log(`Phone Brand is ${this.brand} and model is ${this.modelName}`);
};

function Phone(brandName, model) {
    this.brand = brandName;
    this.modelName = model;
    console.log("Here this refers to", this);
}

Phone.prototype.getPhoneInfo = function() {
    console.log("getPhoneInfo this refers to", this);
    console.log(`Phone Brand is ${this.brand} and model is ${this.modelName}`);
};
let phone = new Phone("Apple", "iphone14");
phone.getPhoneInfo();

function Phone(brandName, model, price) {
    this.brand = brandName;
    this.modelName = model;
    this.price = price; 
}

Phone.prototype.getPhoneInfo = function() {
    console.log("getPhoneInfo this refers to", this);
    console.log(`MobilePhone Brand is ${this.brand}, model is ${this.modelName}, and price is ${this.price}`);
};

let Apple = new Phone("Apple", "iphone14", "70000");
Apple.getPhoneInfo();

console.log("......................................................");

let samsung = new Phone("samsung", "Galaxy 23", "65000");
samsung.getPhoneInfo();