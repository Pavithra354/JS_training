class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  displayDetails() {
    console.log(`Make: ${this.make}`);
    console.log(`Model: ${this.model}`);
    console.log(`Year: ${this.year}`);
  }
}

class Car extends Vehicle {
  constructor(make, model, year, doors) {
    super(make, model, year);
    this.doors = doors;
  }

  displayDetails() {
    super.displayDetails();
    console.log(`Doors: ${this.doors}`);
  }
}

// 🏍 New subclass: Motorcycle
class Motorcycle extends Vehicle {
  constructor(make, model, year, hasSidecar = false) {
    super(make, model, year);
    this.hasSidecar = hasSidecar;
  }

  displayDetails() {
    super.displayDetails();
    console.log(
      `Sidecar: ${this.hasSidecar ? 'Yes' : 'No'}`
    );
  }
}

// Create instances
const car = new Car('Honda', 'Accord', 2023, 4);
console.log('Car Details:');
car.displayDetails();

console.log('\nMotorcycle Details:');
const bike = new Motorcycle('Harley-Davidson', 'Iron 883', 2022, true);
bike.displayDetails();