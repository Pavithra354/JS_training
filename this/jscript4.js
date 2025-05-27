// ---------------------- GLOBAL CONTEXT -------------------------
var storeName = "GlobalMart";
var globalItems = ["Rice", "Sugar", "Salt"];
var globalPrices = [50, 40, 10];

function globalFunction() {
    console.log("== GLOBAL CONTEXT ==");
    console.log("Store:", this.storeName); // refers to global `storeName`
    console.log("Items:", this.globalItems);
    console.log("Prices:", this.globalPrices);
}
globalFunction();
console.log(this); // shows the global `this` (window in browser)


// ---------------------- OBJECT CONTEXT -------------------------
var groceryObj = {
    storeName: "ObjectStore",
    items: ["Tea", "Coffee", "Biscuits"],
    prices: [30, 70, 20],
    showDetails: function() {
        console.log("\n== OBJECT CONTEXT ==");
        console.log("Store:", this.storeName);
        console.log("Items:", this.items);
        console.log("Prices:", this.prices);
    }
};
groceryObj.showDetails();


// ---------------------- CONSTRUCTOR FUNCTION -------------------
function GroceryStore(name, items, prices) {
    this.name = name;
    this.items = items;
    this.prices = prices;

    this.showRegular = function() {
        console.log("\n== CONSTRUCTOR CONTEXT (Regular Function) ==");
        console.log("Store:", this.name);
        console.log("Items:", this.items);
        console.log("Prices:", this.prices);
    };

    this.showArrow = () => {
        console.log("\n== CONSTRUCTOR CONTEXT (Arrow Function) ==");
        console.log("Store:", this.name);
        console.log("Items:", this.items);
        console.log("Prices:", this.prices);
    };
}

var store1 = new GroceryStore("ConstructorMart", ["Soap", "Shampoo", "Paste"], [25, 90, 35]);
store1.showRegular();
store1.showArrow();
