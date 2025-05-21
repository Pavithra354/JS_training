//Return Values and Non-Return Values

//Non-Return Values

function describeFestival(name, month, season) {
  console.log(`${name} is usually celebrated in ${month}.`);
  console.log(`The season of the festival is ${season}.`);
}

// Step 2: Call the function with actual values (arguments)
describeFestival("Diwali", "October", "Autumn");


//Return Values
//name,subject and marks are declared inside the function so there is not error


function Results(){
    let name="Hari";
    let subject="Hindi";
    let marks=20;
    return {
        names: name,
        subjects: subject,
        mark: marks
    };
    
}
var Result=Results();
document.write(Result);
console.log(Result);
console.log(Result.names);


function MarkResults(){
    let name="Hari";
    let subject="Hindi";
    let marks=20;
    return [name,subject,marks]
    
}
var Result=MarkResults();
console.log(Result);

//Return values while giving arguments

function Examresults(name,sub,marks){
    let stdresult=name+" " +sub+" " +marks;
    return stdresult;
    
}
var Result=Examresults("Ron","english",78);
console.log(Result);