//annonmonous function
var customerData=function(){
    let customerName="pavithra";
    let customerId="1";
    let customerAddress="ameenpur";
    console.log(customerName);
     console.log(customerId);
      console.log(customerAddress);

}
customerData();//call the function

//anonomous function passing parameter

var customerInfo=function(adharcard,gender){
    console.log("adharcard");
    console.log("gender")
    
}
customerInfo("axs123567","female");

//IIFE(IMMEDIATE INVOKED CALLING FUNCTION)
(
    function(customerdob)
    {
        console.log(customerdob);
    }
)("26jan1995")

//calling annonomous function as callback
function sayHello(callback)
{
    callback();
}
sayHello(function(){
    console.log("welcome to javascript");
})


//predefined functions

setTimeout(function()
{
    console.log("javascript is a programming language");
},5000);



for(var i=0;i<=5;i++){
    (function(index){
                     setTimeout(function(){
                     console.log(index);
                   },5000);
})(i)};


//example of passing anonymous function as object;

let person={
     Fname:"pavithra",
    LastName:"narala"
};


(function()
{
    console.log(person.Fname+" " +person.LastName); 
})
person();