let popularRestaurant = "DOMINO'S PIZZA";
console.log("POPULAR RESTAURANT: " + popularRestaurant);

debugger;

let specialDish = "BUTTER CHICKEN";
console.log("CHEF'S SPECIAL DISH: " + specialDish);

debugger;

// Scope Chain: Order Details
{
    let orderDetails = function(orderId, foodItem) {
        console.log("ORDER ID: " + orderId);
        console.log("FOOD ITEM: " + foodItem);
    };
    orderDetails("ORD1234", "PANEER TIKKA");

    function deliveryLocation(location) {
        console.log("DELIVERY LOCATION: " + location);
    }
    deliveryLocation("Banjara Hills, Hyderabad");
}

debugger;

// IIFE: App Info
(function(appName) {
    console.log("ORDER PLACED USING: " + appName);
})("ZOMATO");