// creating class without parameters
  class Car {
    constructor() {
      this.isRunning = false;
    }

    start() {
      this.isRunning = true;
      return "The car is running";
    }

    stop() {
      this.isRunning = false;
      return "The car has stopped";
    }

    getStatus() {
      return this.isRunning ? "Car is running" : "Car is off";
    }
  }

  let myCar = new Car();
  console.log(myCar.getStatus()); // Car is off
  console.log(myCar.start());     // The car is running
  console.log(myCar.getStatus()); // Car is running
  console.log(myCar.stop());      // The car has stopped
