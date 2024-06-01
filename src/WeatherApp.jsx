import SearchBox from './SearchBox';
import InfoBox from './InfoBox';
import { useState } from 'react';

export default function WeatherApp () {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Delhi",
        feelsLike: 24.84,
        temp: 36.09,
        tempMin: 29.05,
        tempMax: 41.09,
        humidity: 45,
        weather: "haze",
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }
    return (
        <div style={{textAlign: "center"}}>
            <h2>Weather App by Infinity</h2>
            <SearchBox updateInfo={setWeatherInfo}/>
            <InfoBox  info={weatherInfo}/>
        </div>
    )
}