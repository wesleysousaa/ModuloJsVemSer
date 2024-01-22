function celsiusParaFahrenheit(temperature: number): void {
  const celsiusTemperature: GLfloat = temperature;
  console.log(
    `${celsiusTemperature}°C equivalem a ${celsiusTemperature * 1.8 + 32}°F`
  );
}

celsiusParaFahrenheit(36);
