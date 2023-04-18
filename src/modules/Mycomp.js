import { useState } from 'react';

function MyComponent() {
  const [weatherData, setWeatherData] = useState(null);
  const [cityName, setCityName] = useState('');

  async function fetchWeather() {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=fe4feefa8543e06d4f3c66d92c61b69c&units=imperial`
      );
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <input
        type="text"
        value={cityName}
        onChange={(e) => setCityName(e.target.value)}
      />
      <button onClick={fetchWeather}>Get Weather</button>
      {weatherData && (
        <div>
          <h2>{weatherData.name}</h2>
          <p>{weatherData.main.temp}°F</p>
        </div>
      )}
    </div>
  );
}

export default MyComponent;