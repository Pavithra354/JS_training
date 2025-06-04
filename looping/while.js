//<html>
//<head>
    //<title>while loop example</title>
//</head>
//<body>
    //<script>
        // Display student marks using while loop
        let index = 0;
        let studentMarks = [
            { name: "Akhil", marks: 85 },
            { name: "Divya", marks: 92 },
            { name: "Sita", marks: 76 },
            { name: "Rohan", marks: 68 },
            { name: "Meena", marks: 90 }
        ];

        console.log("Student Marks:");
        while (index < studentMarks.length) {
            console.log(`${studentMarks[index].name}: ${studentMarks[index].marks} marks`);
            index++;
        }

        console.log("\n");

        // Simple countdown timer in minutes
        function minuteTimer(minutes) {
            while (minutes > 0) {
                console.log(`Time left: ${minutes} minutes`);
                minutes--;
            }
            console.log("Timer completed!");
        }
        minuteTimer(3); // 3 minutes

        console.log("\n");

        // Print even numbers from 1 to 20
        let num = 1;
        console.log("Even Numbers from 1 to 20:");
        while (num <= 20) {
            if (num % 2 === 0) {
                console.log(num);
            }
            num++;
        }

        console.log("\n");

        // Print reverse from 10 to 1
        let reverse = 10;
        console.log("Countdown from 10 to 1:");
        while (reverse >= 1) {
            console.log(reverse);
            reverse--;
        }

    //</script>
//</body>
//</html>