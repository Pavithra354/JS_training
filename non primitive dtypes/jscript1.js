// object
let student = {
  name: "Pavithra",
  age: 21,
  course: "Computer Science",
  isGraduated: false,
  subjects: ["Math", "JavaScript", "Data Structures"],
  address: {
    city: "Hyderabad",
    zip: "500001"
  },
  greet: function () {
    console.log("Hello, I am " + this.name);
  }
};

// Accessing properties
console.log(student.name);         
console.log(student.subjects[1]);  
console.log(student.address.city); 

// Calling a method
student.greet();                   


//array
// Array of favorite foods
let favoriteFoods = ["Pizza", "Burger", "Biryani", "Ice Cream"];

// Access and print each item using index
console.log("My Favorite Foods:");
console.log(favoriteFoods[0]);
console.log(favoriteFoods[1]);
console.log(favoriteFoods[2]);
console.log(favoriteFoods[3]);

//function
function canVote(age) {
  let message = (age >= 18) 
    ? "You are eligible to vote." 
    : "You are not eligible to vote yet.";
    
  console.log(message);
}

// Example usage
canVote(22);  // eligible
canVote(14);  // not eligible