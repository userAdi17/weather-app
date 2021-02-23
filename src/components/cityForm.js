import React from 'react';
import axios from "axios";
const CityForm = ({setWeatherData, city, setCity,weatherData}) => {
    const API_KEY ='f00881d88585865c3fb2a27151b436e6';
    const getWeatherData = (e) => {
        e.preventDefault();
        axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`).then(({data}) => {
            return setWeatherData(data);
        }).catch(() => {
            setWeatherData({...weatherData, error:true})
        })
    };
    const inputHandler = (e) => {
        console.log(e.target.value);
        setCity(e.target.value)
    };

    return (
        <div>
            <form className='form' action="" onSubmit={getWeatherData}>
                <input  className ='input' type="text" placeholder='Type a city' onChange={inputHandler}/>
                <button  className='btn' type='submit'>Know the weather</button>
            </form>
        </div>
    );
};
export default CityForm;