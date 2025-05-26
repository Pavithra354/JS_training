// Members of an object
let empDetails = {
    firstName: 'pavithra',
    lastName: 'Narala',
    email: 'naralapavithra@gmail.com',
    phoneNo: '123456789',
    address: function () {
        // Use 'let' or 'const' to declare variables
        let street = 'green villas';
        let appartmentName = 'lalitha divine county';
        let blockNO = 'B-410'; // local variable, can't use this.blockNO here
        return `The address is ${street} ${blockNO} ${appartmentName}`;
    }
};
console.log(empDetails.address());

// One more example - member object
let car = {
    brand: "Tesla",
    model: "modelk",
    year: "2023",
    getdetails() {
        return `This car is a ${this.brand} ${this.model} ${this.year}`;
    }
}
console.log(car.getdetails());

// Members of array
let colors = ["red", "blue", "pink", "yellow"];
console.log(colors.length); // length is a property
colors.pop(); // removes last element
console.log("Updated list after using pop is: " + colors);
colors.push("green"); // adds an element
console.log("Updated list after using push is: " + colors);
colors.sort(); // sorts alphabetically
console.log("The sorted colors are: " + colors);

// Constructor function and prototype usage
function car1() {
    this.brand = 'bmw'; // use 'this' to assign to instance
    this.getbrand = function () {
        return this.brand;
    }
}

// Prototype method
car1.prototype.getcarinfo = function () {
    console.log("The car brand is " + this.brand);
};

let newcar1 = new car1();
newcar1.getcarinfo(); // works correctly now