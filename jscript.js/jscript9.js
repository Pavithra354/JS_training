//arrow function
//syntax let variable =()=>{}

let    Listoftheaters=()=>{
    console.log("Theater near me is %cravi","font-weight:bold");
}

Listoftheaters();

let cinemas=(...names)=>{
    console.log(names);

};
cinemas("hit3","yashoda");

let movies=(...names)=>{
    return `my favorite movies are ${names}`;

};
console.log(movies("hit3","yashoda"));


//predefined function usage

setTimeout(()=>{
    console.log("Set time out");
},2000);

setTimeout(Listoftheaters,3000);

//set time out with function call and arguments

function time(time){
    console.log("This runs after the seconds of "+time );
}
setTimeout(time,3000,"3");

setTimeout(() => time("4"), 4000);


setInterval(()=>{
    document.write("We are using set time interval")
},5000)