//sum of two numbers
//let x,y,z;
//it took as a global variables
function sum(){
        x=10;
          y=20;
          z=x+y;
      }
   sum();
console.log("the addition is "+z);


let multiply = function mul(x,y){
      return x*y;
}
console.log("this is multiplication of "+x+" , " +y+" is " + multiply(x,y));


//here it returns the string to console prints that

let show = function Don() {
  return "This is a function stored in a variable.";
};

console.log(show());
//console.log(Don());//it is inner 


//square of the number...........
   let squares=function(num){
        return num*num;
    }
    console.log("%c the square of the number is" +squares(5),"color:red");


    let square = (num) => {
  return num * num;
};

console.log(square(5)); // Output: 25
console.log(square);



//function

//varaible function
let bookName = function(){
      console.log("Harry Potter series");
};
//here when the bookName() is called it goes to function
//then there it will run console
//but it doesnot return anything
//so when it returns there will be nothing so undefined

console.log(bookName());
console.dir(bookName);


//Let us see the path how it works when a function is called


let Noun = function A()
{ 
      console.log("This is inside the function")
      return ("this is returned value that is showed where it is called in the console");
}

console.log(Noun());



let funcs = {
  greet: function() { console.log("Hello!"); },
  bye: function() { console.log("Goodbye!"); }
};

funcs.greet(); // Hello!
funcs.bye();   // Goodbye!


let Song=function(){
  return "sa re ga me pa da ne sa";
}
Song();//it does not do anything

let Sing=Song();
//The string now is stored in the Sing variable

console.log(Sing);

function List(name,lyrics){
  return `The name of the song is ${name} and the lyrics are ${lyrics}`;
}

console.log(`%c ${List("inkem","inkem inkem kavale")}`,"color:red");
let name="Inkem",lyrics="Inkem Inkem Kavaley"
let SongName=List(name,lyrics);
console.log(SongName);