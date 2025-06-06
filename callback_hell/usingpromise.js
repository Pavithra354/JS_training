// //<html>
//     <head>
//         <title>Using Promise for Food Order</title>
//     </head>
//     <body>
//         <script>
            // Creating the promise
            let orderFood = new Promise((resolve, reject) => {
                let orderPlaced = true; // Set to false to simulate order failure

                setTimeout(() => {
                    if (orderPlaced) {
                        resolve("🍔 Your food has been delivered!");
                    } else {
                        reject("🚫 Failed to place the order. Try again.");
                    }
                }, 4000); // 4 seconds delay to simulate delivery time
            });

            // Using the promise
            orderFood
                .then((message) => {
                    console.log(message);
                })
                .catch((error) => {
                    console.error(error);
                });
//         //</script>
//     </body>
// </html>