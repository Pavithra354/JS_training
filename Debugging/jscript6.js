document.write("Start debugging from here<br>");

// Immediately invoked anonymous function with parameter
(function(city){
    document.write("Welcome to " + city + "<br>");
})("Hyderabad");

// Anonymous function 
let showWeather = function(){
    document.write("Weather today: Sunny with light breeze<br>");
}

showWeather();

// Arrow function with parameters
let CarDetails = (make, model) => {
    document.write("Car make: " + make + ", Model: " + model + "<br>");
}

CarDetails("Tesla", "Model 3");

// Function that accepts a callback, returns an array
function getFruits(callback){
    callback();
    return ["Apple", "Banana", "Mango"];
}

document.write(getFruits(function(){
    document.write("Fetching fruits list...<br>");
}));

document.write("<br>");

// Function returning an object
function getUserProfile(callback) {
    callback();
    return { name: "Pavithra", age: 21, profession: "Developer" };
}

let profile = getUserProfile(function() {
    document.write("Loading user profile...<br>");
});

document.write("User Name: " + profile.name + ", Age: " + profile.age + "<br>");

// setTimeout with anonymous function
setTimeout(function(){
    document.write("This message is displayed after 2 seconds delay.<br>");
}, 2000);