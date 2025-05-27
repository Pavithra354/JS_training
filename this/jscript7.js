//callback
let bankDetails = {
    getBankDetails: function() {
        debugger;
        console.log(`Bank Name is ${this.name} and Founder is ${this.founder}`);
    }
}
bankDetails.getBankDetails();

let axisBankDetails = {
    name: "Axis Bank",
    founder: "Amitabh Chaudhary",
}
let sbiBankDetails = {
    name: "SBI Bank",
    founder: "GOVERNMENT OF INDIA",
}
bankDetails.getBankDetails.call(axisBankDetails);
bankDetails.getBankDetails.call(sbiBankDetails); 

//functions using parameters
let BankDetails = {
    getBankDetails: function(argument1, argument2) {
        debugger;
        console.log(`Bank Name is ${this.name} and Founder is ${this.founder}`);
        console.log("Argument1", argument1);
        console.log("Argument2", argument2);
    }
}

bankDetails.getBankDetails(); //calling the method of the object

let AxisbankDetails = {
    name : "Axis Bank",
    founder : "Amitabh Chaudhary",
}
bankDetails.getBankDetails.call(axisBankDetails , "1993", "53777");
bankDetails.getBankDetails.apply(sbiBankDetails , ["1995", "1234"]);//array
bankDetails.getBankDetails.call(sbiBankDetails);