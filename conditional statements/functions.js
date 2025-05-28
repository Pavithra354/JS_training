// function with 2 parameters: 
function studentCount(count, func) {
    func(count);
}

studentCount(10, function(noOfStudents) {
    console.log("Total students enrolled:", noOfStudents);
});

// callback with arrow function
studentCount(5, (noOfStudents) => {
    console.log("Students enrolled:", noOfStudents);
});

// function with default parameter and rest parameters
function studentDetails(className = "10th Grade", fncall, ...names) {
    fncall(className, names);
}

studentDetails("12th Grade", function(grade, students) {
    console.log(grade, "students are:");
    console.log(students);
}, "Ravi", "Priya", "Amit", "Sneha");

// pass undefined to use default value
studentDetails(undefined, function(grade, students) {
    console.log(grade, "class students:");
    console.log(students);
}, "Anil", "Divya");

// function with return type
function welcomeMessage(name, fun) {
    return fun(name);
}

console.log(welcomeMessage("Kiran", function(studentName) {
    return "Welcome, " + studentName + "!";
}));

// anonymous callback example
function showSubjects(callback) {
    callback();
    console.log(callback);
}

showSubjects(function() {
    let subjects = ["Maths", "Science", "English"];
    console.log(subjects);
});

// rest parameters in callback example
function availableCourses(fn) {
    fn("Physics", "Chemistry", "Biology");
}

availableCourses(function(...courses) {
    console.log("Available courses:", courses);
});