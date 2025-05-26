let smartphone = {
    // 🔹 Properties: describe the object (data)
    brand: "Apple",
    model: "iPhone 15",
    color: "Black",
    storage: "128GB",
    
    // 🔸 Method: performs an action (function)
    makeCall: function(number) {
        console.log(`Calling ${number} from ${this.brand} ${this.model}...`);
    },

    sendMessage: function(number, message) {
        console.log(`Sending message: "${message}" to ${number}`);
    }
};

// Accessing properties
console.log("Brand:", smartphone.brand);
console.log("Color:", smartphone.color);

// Using methods
smartphone.makeCall("9876543210");
smartphone.sendMessage("9876543210", "Hello, how are you?");
