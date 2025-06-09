//<html>
  //<head>
    //<title>Using Getter Methods in My Car Class</title>
  //</head>
  //<body>
    //<script>
      class Car {
        constructor(name, brand, price) {
          this._name = name;
          this._brand = brand;
          this._price = price;
        }

        // Getter for 'name'
        get name() {
          return this._name;
        }

        // Getter for 'brand'
        get brand() {
          return this._brand;
        }

        // Getter for 'price'
        get price() {
          return this._price;
        }

        // Method to display car details
        displayDetails() {
          console.log(`Car Details:
            Name: ${this._name}
            Brand: ${this._brand}
            Price: ₹${this._price}`);
        }
      }

      // Creating multiple instances of Car
      let car1 = new Car("Rolls-Royce Cullinan", "Rolls-Royce", 69000000);
      let car2 = new Car("Bentley Bentayga", "Bentley", 70000000);
      let car3 = new Car("Mercedes-Benz G-Class", "Mercedes-Benz", 85000000);

      // Displaying details of each car
      car1.displayDetails();
      car2.displayDetails();
      car3.displayDetails();

      // Attempting to access properties directly (not recommended)
      console.log("\nAccessing properties directly:");
      console.log(car1._name); // Direct access to private field
      console.log(car2._brand); // Direct access to private field
      console.log(car3._price); // Direct access to private field
    //</script>
  //</body>
//</html>
