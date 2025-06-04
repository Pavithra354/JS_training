//<html>
//<head>
    //<title>Looping with for...in</title>
//</head>
//<body>
    //<script>
        // Student info using for...in
        let student = {
            name: "Pavithra",
            age: 21,
            department: "Computer Science",
            college: "JNTU Hyderabad"
        };

        console.log("Student Profile:");
        for (let key in student) {
            console.log(`${key}: ${student[key]}`);
        }

        console.log("\n");

        // Book prices using for...in
        const bookPrices = {
            "JavaScript": 350,
            "Python": 400,
            "C Language": 250,
            "Java": 500
        };

        console.log("Book Prices:");
        for (let book in bookPrices) {
            console.log(`${book}: ₹${bookPrices[book]}`);
        }

        console.log("\n");

        // Iterating over a string
        const city = "Delhi";
        console.log("City characters:");
        for (let index in city) {
            console.log(city[index]);
        }

        console.log("\n");

        // Iterating over an array
        const mobiles = ["Samsung", "iPhone", "OnePlus", "Realme"];
        console.log("Mobile Brands:");
        for (let brand in mobiles) {
            console.log(`Index: ${brand}, Brand: ${mobiles[brand]}`);
        }

        console.log("\n");

        // Hobbies array
        const hobbies = ["Reading", "Coding", "Drawing", "Traveling"];
        console.log("Hobbies:");
        for (let i in hobbies) {
            console.log(`Index ${i}: ${hobbies[i]}`);
        }

    //</script>
//</body>
//</html>
