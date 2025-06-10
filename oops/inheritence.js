class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);          // call parent constructor
    this.breed = breed;
  }
  speak() {
    super.speak();       // use parent behavior…
    console.log(`${this.name} barks!`);  // …then extend it
  }
}

const myDog = new Dog("Buddy","Beagle");
myDog.speak();

const max = new Dog("Max", "Labrador");
max.speak();



class Rabbit extends Animal {
  constructor(name, breed) {
    super(name);          // call parent constructor
    this.breed = breed;
  }
  speak() {
    super.speak();       // use parent behavior…
    console.log(`${this.name} woof!`);  // …then extend it
  }
}
const myRabbit = new Rabbit("puppy", "Beagle");
myRabbit.speak();




