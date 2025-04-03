function toFahrenheit(c) {
return (c * 1.8) + 32;
}

function toCelsius(f) {
return (5/9) * (f-32);
}

function toSquareFeet(acres) {
return acres * 43560;
}

let x = toFahrenheit(65);
document.getElementById("demo1").innerHTML = c + "°C = " + x + "°F";

let y = toCelsius(x);
document.getElementById("demo2").innerHTML = x + "°F = " + y + "°C";

let z = toSquareFeet(3.243);
document.getElementById("demo3").innerHTML = acres + "acres is: " + z + "square feet";

