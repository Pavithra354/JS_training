//call function

function Courses(names){
    names();
    console.log(names);
}

Courses(function(){
    let Names=["BZC","BTZC","BCOM"];
    document.write(Names);
    
});


//call function with parameters

function InterCourse(Ids){
    Ids("Mpc","Bipc");
}

InterCourse(function(...names)
{
    console.log(`the courses available in inter are %c${names}`,"color:pink");
});

//call function 

function Inter(Ids){
    Ids(function(){
        console.log("write");
    });
}

Inter(function(names)
{
    names();
});