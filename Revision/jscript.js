// let, const, var usage

let today = "02-06-2025";
today = "03-06-2025";

const appTitle = "Movie Booking App";
document.write(appTitle);

console.log("Updated date is: ", today);

// var allows redeclaration
var userAge = 22;
var userAge = 24;
console.log("User age: ", userAge);

// primitive data types
let userName = "Pavithra";
let isStudent = true;
let userScore = 95;

console.log("Data types are: ", typeof userName, typeof isStudent, typeof userScore);

let userEmail;
console.log("userEmail is: ", userEmail);

let userPhone = null;
console.log("userPhone is: ", userPhone);

let uniqueId = Symbol("ID123");
console.log("Unique Symbol ID: ", uniqueId);

// non-primitive data types

let favoriteMovies = ["Inception", "Interstellar", "Avengers", "RRR"];
console.log("My favorite movie is: ", favoriteMovies[2]);

let movieTheaters = {
    inox: { street: "Main Road", city: "Hyderabad" },
    pvr: { street: "Banjara Hills", city: "Hyderabad" }
};
console.log("INOX theater address: ", movieTheaters.inox);

// Function to book a movie
function bookMovie(movie, theater) {
    console.log("You have booked", movie, "at", theater, "theater.");
}

bookMovie("Inception", "PVR");