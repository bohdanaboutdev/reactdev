import {useRef, useState} from "react";
import {useEffect} from "react";
import React from "react";
import './Weather.css';

import clear_icon from "../src/assets/clear.png";
import cloud_icon from "../src/assets/cloud.png";
import drizzle_icon from "../src/assets/drizzle.png";
import humidity_icon from "../src/assets/humidity.png";
import rain_icon from "../src/assets/rain.png";
import snow_icon from "../src/assets/snow.png";
import wind_icon from "../src/assets/wind.png";
import search_icon from "../src/assets/search-button.svg";



function Weather() {

    const inputRef = useRef();

    const [weatherData, setWeatherData] = useState(false);

    const allIcons = {
        "01d" : clear_icon,
        "01n" : clear_icon,
        "02d" : cloud_icon,
        "02n" : cloud_icon,
        "03d" : cloud_icon,
        "03n" : cloud_icon,
        "04d" : drizzle_icon,
        "04n" : drizzle_icon,
        "09d" : rain_icon,
        "09n" : rain_icon,
        "10d" : rain_icon,
        "10n" : rain_icon,
        "13d" : snow_icon,
        "13n" : snow_icon,
    }

    const weather_API_KEY = '1701f10ace010b2790326bf85d514a34';
    const search = async (city) => {
        if (city === "") {
            alert("Enter city name.")
            return;
        }
        try {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${weather_API_KEY}`;

            const response = await fetch(url);
            const data = await response.json();
            // console.log(data);
            const icon = allIcons[data.weather[0].icon] || clear_icon;
            setWeatherData({
                humidity: data.main.humidity,
                windSpeed: data.wind.speed,
                temperature: Math.floor(data.main.temp),
                location: data.name,
                icon: icon,
                description: data.weather[0].description
            })
        } catch (error) {
            setWeatherData(false);
            console.error("Error in fetching weather data.");
        }
    }

    useEffect(() => {
        search("Kyiv");
    },[])

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            search(inputRef.current.value);
        }
    };

    return (
      <>
        <div className="weather-wrapper">
            <h3>Weather{weatherData.location ? <> in {weatherData.location}</> : <></>}</h3>
            <div className="weather-search">
                <input name="city" ref={inputRef} type="text" placeholder="Search City" onKeyDown={handleKeyDown} />
                <img src={search_icon} alt="" onClick={() => search(inputRef.current.value)}/>
            </div>

            {weatherData?<>

            <img src={weatherData.icon} alt="" className="weather-icon"/>
            <p className="location">{weatherData.location}</p>
            <p className="temperature">{weatherData.temperature} °C</p>
            <p className="description">{weatherData.description}</p>
            <div className="weather-data">
                <div className="humidity">
                    <img src={humidity_icon} alt=""/>
                    <div>
                        <p>{weatherData.humidity} %</p>
                        <span>Humidity</span>
                    </div>
                </div>
                <div className="wind">
                    <img src={wind_icon} alt=""/>
                    <div>
                        <p>{weatherData.windSpeed} km/h</p>
                        <span>Wind Speed</span>
                    </div>
                </div>
            </div>

            </>:<></>}

        </div>
      </>
    );
}

export default Weather;