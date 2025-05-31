// Comparison and Type Coercion Examples
console.log(10 == '10');        
console.log(10 === '10');       
console.log(null == undefined);
console.log(null === undefined);
console.log("5" > 2);           
console.log("abc" == "abc");  

let tempReading = '30' + 5;    
console.log(tempReading);       
console.log(typeof tempReading); 

console.log("Subtracting string from number:", "40" - 10); 
console.log("Multiplying string with number:", "6" * 3); 

// Converting to number
console.log(Number("123") + 1); // 124
console.log(Number("abc"));     // NaN

// Temperature status checker
let temperature = 36;

function checkTemperature(temp) {
    if(temp >= 40){
        console.log("It's very hot today!");
    } else if(temp >= 30){
        console.log("It's warm outside.");
    } else if(temp >= 20){
        console.log("It's a pleasant day.");
    } else if(temp >= 10){
        console.log("It's a bit cold.");
    } else{
        console.log("It's freezing!");
    }
}

checkTemperature(temperature);

// Login check
let userInput = "MySecure123";
let actualPassword = "MySecure123";

if(userInput === actualPassword){
    console.log("Login successful.");
} else {
    console.log("Login failed. Please check your password.");
}