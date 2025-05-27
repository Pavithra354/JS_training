//callback
let universityDetails = {
    getUniversityDetails: function() {
        debugger;
        console.log(`University Name is ${this.name} and Chancellor is ${this.chancellor}`);
    }
}
universityDetails.getUniversityDetails();

let mruUniversityDetails = {
    name: "MRU",
    chancellor: "MallaReddy",
}
let stanfordUniversityDetails = {
    name: "Stanford University",
    chancellor: "Richard Saller",
}
universityDetails.getUniversityDetails.call(mruUniversityDetails);
universityDetails.getUniversityDetails.call(stanfordUniversityDetails); 

//functions using parameters
let UniversityDetails = {
    getUniversityDetails: function(establishedYear, ranking) {
        debugger;
        console.log(`University Name is ${this.name} and Chancellor is ${this.chancellor}`);
        console.log("Established Year", establishedYear);
        console.log("World Ranking", ranking);
    }
}

universityDetails.getUniversityDetails(); //calling the method of the object

let MruUniversityDetails = {
    name : "MRU",
    chancellor : "MallaReddy",
}
universityDetails.getUniversityDetails.call(mruUniversityDetails , "1861", "1");
universityDetails.getUniversityDetails.apply(stanfordUniversityDetails , ["1885", "3"]);//array
universityDetails.getUniversityDetails.call(stanfordUniversityDetails);