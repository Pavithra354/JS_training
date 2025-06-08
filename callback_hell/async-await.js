let hollywoodMovieDetails = new Promise((resolve, reject) => {
    setTimeout(() => {
        let hollywood = true;
        if (hollywood) {
            resolve("Inception is a mind-bending movie directed by Christopher Nolan.");
        } else {
            reject("No Hollywood movie details.");
        }
    }, 6000);
});

let bollywoodMovieDetails = new Promise((resolve, reject) => {
    setTimeout(() => {
        let bollywood = true;
        if (bollywood) {
            resolve("3 Idiots is a popular Bollywood movie directed by Rajkumar Hirani.");
        } else {
            reject("No Bollywood movie details.");
        }
    }, 4000);
});

async function showMovieDetails() {
    let detailsAvailable = true;

    await hollywoodMovieDetails.then((result) => {
        console.log(result);
    }).catch((err) => {
        console.log(err);
    });

    await bollywoodMovieDetails.then((result) => {
        console.log(result);
    }).catch((err) => {
        console.log(err);
    });

    if (detailsAvailable) {
        console.log("Above are the two movie details available.");
    } else {
        console.log("No movie details available.");
    }
}

showMovieDetails();