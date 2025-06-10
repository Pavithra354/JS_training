class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  start() {
    this.#checkEngine();           // Hidden complexity
    console.log(`${this.make} ${this.model} is starting.`);
  }

  drive() {
    console.log(`${this.make} ${this.model} is driving.`);
  }

  #checkEngine() {
    console.log(' Running internal engine diagnostics...');
    // Complex checks would go here
  }
}

const myCar = new Car('Tata', 'Punch');
myCar.start();  // 🔧 Running internal engine diagnostics...
                 // Tata Punch is starting.
myCar.drive();  // Tata Punch is driving.
//myCar.checkEngine();
// myCar.#checkEngine();  //syntax error