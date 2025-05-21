//IIFE (immediately invoked function expression)

//anonymous function without the variable

(function(){
    console.log("this line run immediately");
    
})();

//IIFE with parameters

(function (Strength){
    document.write("my strength is : " +Strength);
})("Team Work");
 

(function(...Strength){
    console.log(Strength);
})("team work","communication","positive nature");


Weakness=["Lazyness","Movies"];

(function(Weakness)
{
    console.log("My weakness is " +Weakness );
})(Weakness);

//IIFE with function as parameter

(function(fprogram){
    fprogram();
})(function(){
    console.log("This is a IIFE with the parameter is function")
});


//IIFE with function call as a parameter
function MovNames(){
    console.log("The resent movie is hit3");
}

(function(Call){
    Call();
})(MovNames);