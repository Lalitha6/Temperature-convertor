function convertToFarhenheit() {
  var celsiusInput = document.getElementById("celsiusInput").value;
  var fahrenheitOutput = document.getElementById("fahrenheitOutput");

  var fahrenheit = (celsiusInput * 9/5) + 32;
  fahrenheitOutput.innerHTML = celsiusInput + "°C = " + fahrenheit.toFixed(2) + "°F";
}

function convertToCelsius() {
  var fahrenheitInput = document.getElementById("fahrenheitInput").value;
  var celsiusOutput = document.getElementById("celsiusOutput");

  var celsius = (fahrenheitInput - 32) * 5/9;
  celsiusOutput.innerHTML = fahrenheitInput + "°F = " + celsius.toFixed(2) + "°C";
}
