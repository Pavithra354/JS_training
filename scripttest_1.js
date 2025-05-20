//function with in a function
//sum of two numbers.........
function sum(){
        x=10;
          y=20;
          z=x+y;
            multiply(x,y);
          }
   sum();

 console.log("the sum of two numbers are"+z);

   //multiply......................
   let multiply=function mul(x,y){
     return x*y;
   }
   console.log("the muliply of two numbers are:"+multiply(x,y));
  

   
         
   //square of the number...........
   let square=function(num){
        return num*num;
    }
    console.log("%c the square of the number is"+square(5),"color:red");
    square();
    