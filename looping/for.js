//<!-- <html>
    //<head>
        //<title>Using For Loop Example</title>
    //</head>
    //<body>
         //<script> -->
            // Simple array loop
            let cities = ["Hyderabad", "Bangalore", "Chennai", "Delhi"];
            for (let i = 0; i < cities.length; i++) {
                console.log("City:", cities[i]);
            }

            // Object with categories
            var schoolItems = {
                stationery: ["pen", "pencil", "eraser", "scale"],
                bags: ["school bag", "laptop bag"],
                accessories: ["bottle", "lunch box"]
            };

            console.log("Stationery Items:");
            for (let i = 0; i < schoolItems.stationery.length; i++) {
                console.log(schoolItems.stationery[i]);
            }

            console.log("Bag Items:");
            for (let i = 0; i < schoolItems.bags.length; i++) {
                console.log(schoolItems.bags[i]);
            }

            console.log("Accessories:");
            for (let i = 0; i < schoolItems.accessories.length; i++) {
                console.log(schoolItems.accessories[i]);
          }
         /* //</script>
    //</body>
//</html>   */