// Logical AND (&&)
if(true && "hello"){
    console.log("true AND a non-empty string is true");
}

if("" && 100){
    console.log("empty string AND number: won't print because '' is false");
}

if(null && "JS"){
    console.log("null AND string: won't print because null is false");
}

if("value" && 0){
    console.log("string AND 0: won't print because 0 is false");
} else {
    console.log("string AND 0 gives false");
}

// Logical OR (||)
if(false || "text"){
    console.log("false OR non-empty string is true");
}

if(undefined || 42){
    console.log("undefined OR number is true");
}

if(0 || null){
    console.log("0 OR null: won't print because both are false");
} else {
    console.log("0 OR null gives false");
}

if("" || false || "yes"){
    console.log("multiple OR: result is the first truthy value");
}

let isAvailable = "" || null || 0 || "Available";
if(isAvailable){
    console.log("isAvailable is:", isAvailable);
}