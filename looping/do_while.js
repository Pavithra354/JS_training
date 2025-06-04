//<html>
//<head>
    //<title>do while loop example</title>
//</head>
//<body>
    //<script>
        // Print numbers 5 to 15 using do...while
        let num = 5;
        do {
            console.log(num);
            num++;
        } while (num <= 15);

        console.log("\n");

        // Print reverse even numbers from 20 to 2
        let rev = 20;
        do {
            if (rev % 2 === 0) {
                console.log(rev);
            }
            rev--;
        } while (rev >= 2);

        console.log("\n");

        // Exception handling in do...while loop
        let counter = 1;
        do {
            try {
                if (counter > 4) {
                    throw new Error("Maximum limit exceeded!");
                }
                console.log("Step:", counter);
                counter++;
            } catch (err) {
                console.error(err.message);
                break;
            }
        } while (counter <= 10);

        console.log("End of loop with error handling.\n");

        // Simulated OTP retry function using do...while
        function otpVerification() {
            const correctOTP = "1234";
            let enteredOTP = "";
            let tries = 0;

            do {
                // Simulated input instead of prompt
                const fakeInputs = ["1111", "9999", "1234"]; // last one is correct
                enteredOTP = fakeInputs[tries] || "";
                console.log(`Entered OTP: ${enteredOTP}`);
                tries++;

                if (enteredOTP !== correctOTP) {
                    console.log("Invalid OTP. Try again.");
                }

            } while (enteredOTP !== correctOTP && tries < 3);

            if (enteredOTP === correctOTP) {
                console.log("OTP verified successfully. Access granted.");
            } else {
                console.log("Failed to verify OTP after 3 attempts. Access denied.");
            }
        }

        otpVerification();
    //</script>
//</body>
//</html>