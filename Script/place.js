// Footer year + last modified
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;


// Wind chill
function calculateWindChill(tempC, speedKmh) {
  return (
    13.12 +
    0.6215 * tempC -
    11.37 * Math.pow(speedKmh, 0.16) +
    0.3965 * tempC * Math.pow(speedKmh, 0.16)
  ).toFixed(1);
}

const temp = parseFloat(document.getElementById("temperature").textContent);
const speed = parseFloat(document.getElementById("windspeed").textContent);

let windchillText = "N/A";
if (temp <= 10 && speed > 4.8) {
  windchillText = calculateWindChill(temp, speed) + " °C";
}
document.getElementById("windchill").textContent = windchillText;

// Live SVG weather icon logic
function getWeatherSVG(temp) {
  // Simple logic: hot = sun, cold = snow, mild = cloud
  if (temp >= 25) {
    // Sunny
    return `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><circle cx="24" cy="24" r="12" fill="#FFD600"/><g stroke="#FFD600" stroke-width="3"><line x1="24" y1="2" x2="24" y2="10"/><line x1="24" y1="38" x2="24" y2="46"/><line x1="2" y1="24" x2="10" y2="24"/><line x1="38" y1="24" x2="46" y2="24"/><line x1="8.5" y1="8.5" x2="14.5" y2="14.5"/><line x1="33.5" y1="33.5" x2="39.5" y2="39.5"/><line x1="8.5" y1="39.5" x2="14.5" y2="33.5"/><line x1="33.5" y1="14.5" x2="39.5" y2="8.5"/></g></svg>`;
  } else if (temp <= 10) {
    // Snowy
    return `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><ellipse cx="24" cy="32" rx="14" ry="8" fill="#B3E5FC"/><g stroke="#81D4FA" stroke-width="2"><line x1="24" y1="38" x2="24" y2="46"/><line x1="20" y1="42" x2="28" y2="42"/><line x1="21" y1="45" x2="27" y2="39"/><line x1="27" y1="45" x2="21" y2="39"/></g></svg>`;
  } else {
    // Cloudy
    return `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><ellipse cx="24" cy="32" rx="14" ry="8" fill="#B3E5FC"/><ellipse cx="32" cy="28" rx="10" ry="6" fill="#90CAF9"/></svg>`;
  }
}

const weatherIcon = document.getElementById("weather-icon");
if (weatherIcon) {
  weatherIcon.innerHTML = getWeatherSVG(temp);
}
