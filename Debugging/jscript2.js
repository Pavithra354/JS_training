// Function to generate weather alerts
function generateWeatherAlert(city, temperature, condition) {
  debugger; // Inspect parameters here during execution

  const alert = {
    city,
    temperature: `${temperature}°C`,
    condition,
    message: `${condition} in ${city}. Current temperature is ${temperature}°C.`,
    alertLevel: temperature > 40 ? "High Heat Alert" :
                temperature < 5 ? "Cold Weather Alert" :
                "Normal"
  };

  return alert;
}

// Function call with parameters
const weatherUpdate = generateWeatherAlert("Hyderabad", 42, "Sunny");

// Output the result
console.log("Weather Alert:", weatherUpdate);