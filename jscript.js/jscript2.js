//console styling

console.log("JavaScript");

//console string styling
console.log("%cString has the color blue with background color light blue with other stylings","color:blue;background-color:lightblue;padding:20px;");

//styling variables in the console
let hi = "Hello, styled console!";
console.log("%c" + hi, "color: red; font-size: 16px; font-weight: bold;background-color:grey");
 
var style="Hello styled variable in a string";
console.log(`%c${style}`, "color: red; font-size: 16px; font-weight: bold;background-color:grey");


//styling document in js
var Paragraph="We are styling the string in document.write keyword";
//document.write("%c"+ Paragraph,"color:yellow;margin:10px;background-color:lightblue;border-radius:10px;");
//%c only for console
//document styling is similar to css
document.write(`<p style="color:yellow;margin:10px;background-color:lightblue;border-radius:10px;">${Paragraph}</p>`);

//function call in other functions

function firstfunction(){
    console.log("this is in the first function");
}
function secondfunction(){
    console.log("this is second function");
    console.log("we are now calling the fisrst function ");
    firstfunction();
}
secondfunction();

//Multiple use of global function in other functions

function Orange(){
    console.log("%c   ","background-color:orange");
}