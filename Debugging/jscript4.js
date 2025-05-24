let Thermostat = "on";
document.write("Thermostat is " + Thermostat);
debugger;

let Light = "off";
document.write("<br>Light is " + Light);
debugger;

function DeviceStatus() {
    document.write("<br>Checking devices status...");
    
    function CheckSensors() {
        document.write("<br>Sensors are all active");
    }
    CheckSensors();
}

let LastEvent = "Door opened";
document.write("<br>Last event: " + LastEvent);

DeviceStatus();

document.write("<br>");

let Devices = {
    thermostat: "72°F",
    lights: "off",
    door: "closed"
};

function ShowDeviceStatus(deviceObj) {
    document.write("<br>Thermostat temperature: " + deviceObj.thermostat);
    document.write("<br>Lights are " + deviceObj.lights);
    document.write("<br>Door is " + deviceObj.door);
}

ShowDeviceStatus(Devices);

document.write("<br>");

function GetSettings(...settings) {
    return settings;
}

document.write("<br>Active settings: " + GetSettings("auto-lock", "energy-saving", "night mode"));