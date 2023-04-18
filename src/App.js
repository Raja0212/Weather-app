import React, { useState } from "react";
import styled from "styled-components";
import Axios from "axios";
// import CityComponent from "./modules/CityComponent";
import WeatherComponent from "./modules/WeatherInfoComponent";
import Apps from "./modules/Dropdownmenu";
import "./index.css";

import BlockquoteWithAvatar from "./modules/Overview";

// import Image from "./modules/Image";







export const WeatherIcons = {
  "01d": "/icons/sunny.svg",
  "01n": "/icons/night.svg",
  "02d": "/icons/day.svg",
  "02n": "/icons/cloudy-night.svg",
  "03d": "/icons/cloudy.svg",
  "03n": "/icons/cloudy.svg",
  "04d": "/icons/perfect-day.svg",
  "04n": "/icons/cloudy-night.svg",
  "09d": "/icons/rain.svg",
  "09n": "/icons/rain-night.svg",
  "10d": "/icons/rain.svg",
  "10n": "/icons/rain-night.svg",
  "11d": "/icons/storm.svg",
  "11n": "/icons/storm.svg",
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 380px;
  padding: 5px 2px;
  margin: 20px auto;
  border-radius: 4px;
  box-shadow: 0 3px 6px 0 #555;
  background: white;
  font-family: Montserrat;
  background-image: url("");
//https://images.pexels.com/photos/12907148/pexels-photo-12907148.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load
// background-size: cover;
`;

const UIContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  // width: 380px;
  // padding: 20px 10px;
  margin: auto;
  border-radius: 4px;
  box-shadow: 0 3px 6px 0 #555;
  background: white  ;
  font-family: Montserrat;
  background-image: url("");
//https://images.pexels.com/photos/12907148/pexels-photo-12907148.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load
// background-size: cover;
`;

const AppLabel = styled.span`
  color: black;
  margin: 40px auto;
  font-size: 23px;
  letter-spacing: 1px;
  font-weight: bold;
  // font-family: 'Open Sans', sans-serif;
  font-family: serif;
`;
const CloseButton = styled.span`
  padding: 2px 3px;
  background-color: black;
  border-radius: 50%;
  color: white;
  position: absolute;
`;

function App() {
  const [city, updateCity] = useState();
  const [weather, updateWeather] = useState();


  const fetchWeather = async (e, selectedCity) => {
    console.log('selectedCity', selectedCity)
    e.preventDefault(); 
    // const header = new Headers({ "Access-Control-Allow-Origin": "*" });
    // const response = await fetch(`http://localhost:5000/weather/${selectedCity.name}`,{ header: header })

    const response = await Axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${selectedCity.name}&appid=fe4feefa8543e06d4f3c66d92c61b69c`,
    );
    updateCity(selectedCity.name)
    updateWeather(response.data);
  };



  return (
    <div>

      <Container>
        <AppLabel>React Weather App</AppLabel>
        {city && weather ? (
          <WeatherComponent weather={weather} city={city} />
        ) : (
          <Apps updateCity={updateCity} fetchWeather={fetchWeather} />

        )}
      </Container>

      {/* <UIContainer> */}

        {/* <Image /> */}
        {/* <article>
          <p class="heading">This app provides users with up-to-date weather information for their desired location in a user-friendly and responsive interface.</p>
        </article> */}
         {/* <BlockquoteWithAvatar/> */}
      

      {/* </UIContainer>  */}
    </div>
  );


}

export default App; 
