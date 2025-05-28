// if-else example
let hasZomatoAccess = false;
let hasSwiggyAccess = true;

if (hasZomatoAccess) {
    console.log("Zomato Account:");
    console.log("Username: foodie@zomato.com");
    console.log("Password: ******");
} else if (hasSwiggyAccess) {
    console.log("Swiggy Account:");
    console.log("Username: eater@swiggy.com");
    console.log("Password: ******");
} else {
    console.log("No food delivery accounts found.");
}

// if-else if-else example for priority delivery service
let hasDominosAccess = false;
let hasPizzaHutAccess = true;
let hasBurgerKingAccess = true;

if (hasDominosAccess) {
    console.log("%c Ordering from Domino's", "color: blue");
} else if (hasPizzaHutAccess) {
    console.log("%c Ordering from Pizza Hut", "color: red");
} else if (hasBurgerKingAccess) {
    console.log("%c Ordering from Burger King", "color: brown");
} else {
    console.log("No fast food service available");
}

// switch example for selecting payment method
let paymentMethod = "UPI";

switch (paymentMethod) {
    case "Credit Card":
        console.log("Payment Method: Credit Card");
        break;
    case "Debit Card":
        console.log("Payment Method: Debit Card");
        break;
    case "UPI":
        console.log("Payment Method: UPI (Google Pay/PhonePe)");
        break;
    case "Cash on Delivery":
        console.log("Payment Method: Cash on Delivery");
        break;
    default:
        console.log("Invalid payment method selected.");
}