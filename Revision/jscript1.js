// Named function - no return
function printDetails(name, age) {
    console.log(`Name: ${name}, Age: ${age}`);
}
printDetails("Pavithra", 21);

// Named function - with return
function calculateArea(length, breadth) {
    return length * breadth;
}
console.log("Area of rectangle:", calculateArea(5, 10));

// Optional parameter
function displayCourse(courseName, duration) {
    if (duration) {
        console.log(`Course: ${courseName}, Duration: ${duration} months`);
    } else {
        console.log(`Course: ${courseName}, Duration not specified`);
    }
}
displayCourse("JavaScript");
displayCourse("Python", 3);

// Default parameter
function connectServer(ip = "127.0.0.1") {
    console.log(`Connecting to server at ${ip}`);
}
connectServer();
connectServer("192.168.1.1");

// Rest parameters
function listFruits(...fruits) {
    console.log("Fruits available:", fruits.join(", "));
}
listFruits("Apple", "Banana", "Mango", "Grapes");

// Anonymous function in variable
let logoutMessage = function(user) {
    return `${user} has been logged out.`;
};
console.log(logoutMessage("Admin"));

// IIFE - normal function
console.log((function(){
    return "Normal IIFE executed.";
})());

// Arrow function
let square = num => num * num;
console.log("Square of 6:", square(6));

// Arrow IIFE
(() => {
    console.log("Arrow IIFE says: Welcome back!");
})();