// object
let car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2022,
  color: "Blue",
  mileage: 15000, // in kilometers

  // Method to display car info
  displayInfo: function() {
    console.log(`Car: ${this.brand} ${this.model} (${this.year})`);
    console.log(`Color: ${this.color}`);
    console.log(`Mileage: ${this.mileage} km`);
  },

  // Method to drive the car and increase mileage
  drive: function(distance) {
    this.mileage += distance;
    console.log(`Drove ${distance} km. Total mileage is now ${this.mileage} km.`);
  }
};

// Using the object
car.displayInfo();
car.drive(250);
car.displayInfo();

//array
// Array of favorite foods
let favoriteFoods = ["Pizza", "Burger", "Biryani", "Ice Cream"];

// Access and print each item using index
console.log("My Favorite Foods:");
console.log(favoriteFoods[0]);
console.log(favoriteFoods[1]);
console.log(favoriteFoods[2]);
console.log(favoriteFoods[3]);

//function
function canVote(age) {
  let message = (age >= 18) 
    ? "You are eligible to vote." 
    : "You are not eligible to vote yet.";
    
  console.log(message);
}

// Example usage
canVote(22);  // eligible
canVote(14);  // not eligible