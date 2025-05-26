// Global scope
console.log("Global 'this':", this);

// Constructor Function
function Employee(name, department) {
    this.name = name;
    this.department = department;
    this.getDetails = function () {
        console.log(`${this.name} works in ${this.department} department.`);
    };
}

let emp1 = new Employee("Ravi", "Engineering");
emp1.getDetails(); // Ravi works in Engineering department

// Arrow function example: Timer Reminder with lexical this
const reminder = {
    task: "Submit Report",
    time: "6 PM",
    remindLater: function () {
        setTimeout(() => {
            console.log(`Reminder: ${this.task} at ${this.time}`);
        }, 2000);
    }
};
reminder.remindLater(); // Uses arrow function to retain `this` inside setTimeout

// Object with normal and arrow function
const mobileApp = {
    features: ["Camera", "GPS", "Bluetooth"],
    getFeatures: function () {
        console.log("Features:", this.features); // Works
    },
    logContext: () => {
        console.log("Arrow function context:", this); // global object or undefined in strict mode
    }
};
mobileApp.getFeatures();
mobileApp.logContext();

console.log(this.mobileApp); // undefined