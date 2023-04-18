import "./styles.css";
import { Country, State, City } from "country-state-city";
import Select from "react-select";
import { useEffect, useState } from "react";
import styled from "styled-components";



const SearchBox = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: 60px;
  border: black solid 1px;
  border-radius: 2px;

  & input {
    padding: 10px;
    font-size: 14px;
    border: none;
    outline: none;
    // font-family: Montserrat;
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: bold;
  }
  & button {
    // background-color: black;
    // font-size: 16px;
    // padding: 0 10px;
    // color: white;
    // border: none;
    // outline: none;
    // cursor: pointer;
    // font-family: Montserrat;
    // font-weight: bold;
    background-color: black;
    border: none;
    color: white;
    padding: 8px 15px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 8px;
    font-family: Montserrat;
  }
  
`;

const CloseButton = styled.span`
  padding: 2px 3px;
  background-color: black;
  border-radius: 50%;
  color: white;
  position: absolute;
`;

const WelcomeWeatherLogo = styled.img`
  width: 140px;
  height: 140px;
  margin: 40px auto;
`;
  
  export default function App(props) {
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [selectedState, setSelectedState] = useState(null);
    const [selectedCity, setSelectedCity] = useState(null);

    
    useEffect(() => {
      console.log(selectedCountry);
      console.log(selectedCountry?.isoCode);
      console.log(State?.getStatesOfCountry(selectedCountry?.isoCode));
    }, [selectedCountry]);

    
    
    
    return (
      <div>
        <div className="App">
          <WelcomeWeatherLogo src={"/icons/perfect-day.svg"} />
          <Select
            options={Country.getAllCountries()}
            getOptionLabel={(options) => {
              return options["name"];
            }}
            getOptionValue={(options) => {
              return options["name"];
            }}
            value={selectedCountry}
            onChange={(item) => {
              setSelectedCountry(item);
            }}
            />
          <Select
            options={State?.getStatesOfCountry(selectedCountry?.isoCode)}
            getOptionLabel={(options) => {
              return options["name"];
            }}
            getOptionValue={(options) => {
              return options["name"];
            }}
            value={selectedState}
            onChange={(item) => {
              setSelectedState(item);
            }}
            />
          <Select
            options={City.getCitiesOfState(
              selectedState?.countryCode,
              selectedState?.isoCode
              )}
              getOptionLabel={(options) => {
                return options["name"];
              }}
              getOptionValue={(options) => {
                return options["name"];
              }}
              value={selectedCity}
              onChange={(item) => {
                setSelectedCity(item);
              }}
              />

        </div>
          
        <div>
          <SearchBox >
              <button onClick={(e) => props.fetchWeather(e,selectedCity)} type={"submit"}>Search</button>
          </SearchBox>
        </div>
    </div>

);
}
