// //sync call in callback hell
function peep(millisecs){
    let startTime = new Date().getTime();
    let endTime = startTime + millisecs;
    while(new Date().getTime() < endTime);{

    }
}
function years(callback){
    peep(3000);
    console.log("there are total 12 montsh in a year")
    callback()
}
function months(call){
      peep(2000);
    console.log("theer are total 4 weeks in a month")
    call()
}
function weeks(){
      peep(6000);
    console.log("theer are 7 days in a week");
}

console.time("time taken")
years(()=>{
    months(()=>{
        weeks()
    })
})
console.timeEnd("time taken")
