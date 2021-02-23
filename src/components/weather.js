import React from 'react';

const Weather = ({weatherData}) => {
    const formatDate = (time) => {
        const unix = new Date(time * 1000);
        const hours = unix.getHours();
        const min = unix.getMinutes();
        const sec = unix.getSeconds();
        return hours + ':' + min + ':' + sec
    };
    return (
        <div>
           <div className='position'>  <p className='city'> {weatherData.name}</p>
               <span><img className='img' src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`}
                          alt='Icon depicting current weather.'/> </span>
               <p className='country'> &nbsp;{weatherData.sys.country}</p></div>
            <p className='temp'> {(Math.round(weatherData.main.temp - 273.15))}&deg;</p>
            <div className="row">
                <div className='first_row'>
                    <div className="col-md-4"><p>Feels like:<br/>{Math.round(weatherData.main.feels_like - 273.15)}&deg;</p>
                         </div>
                    <div className="col-md-4"><p className='speed'>speed:<br/> {weatherData.wind.speed} </p></div>
                    <div className="col-md-4"><p className="humidity">Humidity : {weatherData.main.humidity}%</p></div>
                </div>
                <div className='second_row'>
                     <div className="col-md-4"><p > Clouds:<br/>{weatherData.clouds.all}</p></div>
                    <div className="col-md-4"><p>sunrise: {formatDate(weatherData.sys.sunrise)}</p></div>
                    <div className="col-md-4"><p>sunset: {formatDate(weatherData.sys.sunset)} </p></div>
                </div>
            </div>
        </div>
    );
};
export default Weather;