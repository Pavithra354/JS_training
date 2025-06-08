// // Named functions returning Promises

// function fetchWeather(city) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log(` Weather for ${city} fetched`);
//       resolve({ city, temp: 29, condition: "Sunny" });
//     }, 1500);
//   });
// }

// function fetchAirQuality(city) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log(`Air quality for ${city} fetched`);
//       resolve({ city, aqi: 75, status: "Moderate" });
//     }, 1000);
//   });
// }

// function fetchNews(city) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log(`Local news for ${city} fetched`);
//       resolve({ city, headlines: ["Local festival announced", "Road repair updates"] });
//     }, 2000);
//   });
// }

// // Run them together
// Promise.all([fetchWeather("Hyderabad"), fetchAirQuality("Hyderabad"), fetchNews("Hyderabad")])
//   .then(([weather, air, news]) => {
//     console.log("\n All data fetched:");
//     console.log("Weather:", weather);
//     console.log("Air Quality:", air);
//     console.log("News:", news);
//   })
//   .catch(err => {
//     console.error("One of the operations failed:", err);
//   });




 function getFirstAuthorDetails() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(" Task One Completed (4s)"); //emojipeida.org
             resolve("RabindranathTagore")
        }, 4000)
     });
 }


 function getSecondAuthorDetails() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
           console.log(" Task Two Completed (2s)"); //emojipeida.org
           resolve("JKRoling")
        }, 2000)
    });
}


 function getThirdAuthorDetails() {
     return new Promise((resolve, reject) => {
         setTimeout(() => {
            console.log(" Task Two Completed (5s)"); //emojipeida.org
            resolve("Arundhati Roy")
         }, 5000)
     });
 }
 //Usage
console.time("TimeStarts");

getFirstAuthorDetails()
 .then((result) => {
   console.log(result);
    return getSecondAuthorDetails();
 })
 .then((getSecondAuthorDetailsResult) => {
   console.log(getSecondAuthorDetailsResult);
    return getThirdAuthorDetails()
 })
 .then((getThirdAuthorDetailsresult)=>{
     console.log(getThirdAuthorDetailsresult);
     console.timeEnd("TimeStarts");
 })



 Promise.all([getFirstAuthorDetails(),getSecondAuthorDetails(),getThirdAuthorDetails()]).then((notifications)=>{
     console.log(notifications);
     console.timeEnd("TimeStarts");
 })