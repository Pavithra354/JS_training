//<html>
  //<head>
    //<title>Car Class Example</title>
  //</head>
  //<body>
    //<script>
      class Car {
        // Private properties
        #make;
        #model;
        #year;

        // Constructor to initialize properties
        constructor(make, model, year) {
          this.#make = make;
          this.#model = model;
          this.#year = year;
        }

        // Getter for 'make' property
        get make() {
          return this.#make;
        }

        // Getter for 'model' property
        get model() {
          return this.#model;
        }

        // Getter for 'year' property
        get year() {
          return this.#year;
        }

        // Method to calculate the car's age
        getCarAge() {
          return new Date().getFullYear() - this.#year;
        }

        // Method to display car details
        displayDetails() {
          let age = this.getCarAge();
          console.log(`Car Details:
            Make: ${this.make}
            Model: ${this.model}
            Year: ${this.year}
            Age: ${age} years`);
        }
      }

      // Creating an instance of Car
      const myCar = new Car("Toyota", "Corolla", 2015);

      // Accessing properties and methods
      myCar.displayDetails();

      // Using getter to access the 'year' property
      let carYear = myCar.year;
      console.log(`Car Year: ${carYear}`);

      // Attempting to modify the 'year' property directly will result in an error
      // myCar.year = 2020; // Uncaught TypeError: Cannot set property 'year' of #<Car> which has only a getter
    //</Car></script>
  //</body>
//</html>