import React, {useState} from 'react';
import Weather from './weather';
import CityForm from "./cityForm";
import Error from './error'
import './weather.css'
function Main() {
    const [weatherData, setWeatherData] = useState({});
    const [city, setCity] = useState('');
    return (
        <div className='main'>
            <CityForm setWeatherData={setWeatherData} city={city} setCity={setCity} weatherData={weatherData}/>
            {(Object.entries(weatherData).length === 0) ? 'weather must be here' : weatherData.error ? <Error/> :
                <Weather weatherData={weatherData}/>
            }
        </div>
    );
}
export default Main;