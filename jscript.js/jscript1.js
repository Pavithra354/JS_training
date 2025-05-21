let variable; //globle variable
let array; //globle variable

function Details(){
    variable=1;
     array=[10,20,30,40];//globle variables are declared here
}
Details();
console.log(variable);
console.log(array[3]);//getting the values that are given in the function

//not globle variable
//Use of function variable outside by using the return 
function Books(){
    return{
        names:["The Lord of the Rings","The Alchemist"],
        writers:{Alchemist:"paulo",Rings:"J.R.R. Tolkien"}

    }
}
console.log(Books());
//the return contain many values 
//to get a particular variable
console.log(Books().names[0],Books().writers.Alchemist);


let sentence=`I have read the books whose names are ${Books().names.join(" and ")} which are written by
${Books().writers.Alchemist} and ${Books().writers.Rings} .They are very enjoyable.`

console.log(sentence);

(function() {
  console.log("This runs immediately!");
})();

(function(greet) {
  document.write(greet);
})("hi");