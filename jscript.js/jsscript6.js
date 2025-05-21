//Named functions

function Skills(){
    let html=" ";
    html="inermediate";
}

//Anonymous function given to a variable

let EducationDetails = function(){
    let school="sri chaitanya";
    console.log(school);
}
//we can call this function through variable

EducationDetails();

//Anonymous function with parameters

let WorkExperience = function(company,yearsExp){
    console.log("company :" +company);
    console.log("years of experience :" + yearsExp);
}

WorkExperience("Google","2 years");

//parameter in variables
company="Excel";
yearsExp="12 years";
WorkExperience(company,yearsExp);