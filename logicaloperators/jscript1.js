if(true){
    console.log("true is true");
}

if(false){
    console.log("false is false");
} else {
    console.log("false is not true");
}

if([]){
    console.log("empty array is true");
}

if([1, 2, 3]){
    console.log("non-empty array is true");
}

if({}){
    console.log("empty object is true");
}

if({ name: "JS" }){
    console.log("non-empty object is true");
}

if(NaN){
    console.log("NaN is true");
} else {
    console.log("NaN is false");
}

if(""){
    console.log("empty string is true");
} else {
    console.log("empty string is false");
}

if("0"){
    console.log("string with zero is true");
}

if(-1){
    console.log("negative number is true");
}

let emptyVar;
if(emptyVar){
    console.log("uninitialized variable is true");
} else {
    console.log("uninitialized variable is false");
}