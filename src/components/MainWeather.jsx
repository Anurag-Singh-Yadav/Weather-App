import React from "react";
import Day from "./Day";
import Hourly from "./Hourly";

function MainWeather({
  currentWeather,
  hourlyWeather,
  dailyWeather,
}) {
  const sunrise = new Date(
    currentWeather.sys.sunrise * 1000 +
      currentWeather.timezone * 1000 -
      3600 * 1000
  ).toLocaleTimeString();
  const sunset = new Date(
    currentWeather.sys.sunset * 1000 +
      currentWeather.timezone * 1000 -
      3600 * 1000
  ).toLocaleTimeString();
  console.log(currentWeather);
  return (
    <div className="w-full px-2">
      <div className="w-full text-center my-2 font-bold text-base sm:text-xl md:text-2xl py-2 box-shadow1">
        Current weather in {currentWeather.name}
      </div>
      <div>
        <div className="font-bold text-center my-2 py-2 text-sm sm:text-base md:text-xl capitalize box-shadow1">
          Weather: {currentWeather.weather[0].description}
        </div>
        <div className="flex flex-wrap sm:px-2 md:px-4 py-2 md:py-4 text-xs sm:text-sm md:text-base font-medium md:font-semibold justify-between items-center box-shadow1">
          <div className="flex flex-col gap-2 justify-center">
            <div>Temperature:{currentWeather.main.temp}°C</div>
            <div>Humidity:{currentWeather.main.humidity}%</div>
            <div>Visibility:{currentWeather.visibility / 100}km</div>
            <div>Sunrise:{sunrise}</div>
          </div>
          <div className="flex flex-col gap-2 justify-center">
            <div>Feels Like:{currentWeather.main.feels_like}°C</div>
            <div>Pressure:{currentWeather.main.pressure}hPa</div>
            <div>Wind Speed:{currentWeather.wind.speed}m/s </div>
            <div>Sunset:{sunset}</div>
          </div>
          <div><img src={`./${currentWeather.weather[0].icon}.png`} className="w-28" alt="icons"></img></div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="col-span-1">
          <div className="text-center font-bold text-xl py-2 box-shadow1 mt-2">
            Hourly Forecast
          </div>
          {hourlyWeather && hourlyWeather.map((weather,i)=>{
            return <Hourly dt={weather.dt} h={weather.main.humidity} t={weather.main.temp} feel={weather.main.feels_like} dis={weather.weather[0].description} id={weather.weather.id} dxt={weather.dt_txt}
            icon={weather.weather[0].icon}
            key={i}
            >
            </Hourly>
          })}


        </div>

        <div className="px-4 col-span-1">
          <div className="text-center font-bold text-xl py-2 box-shadow1 mt-2">
            Daily Forecast
          </div>
          {dailyWeather &&
            dailyWeather.map((weather, i) => {
              return (
                <Day
                  key={i}
                  dt={weather.dt}
                  day={weather.temp.day}
                  night={weather.temp.night}
                  p={weather.pressure}
                  h={weather.humidity}
                  condition={weather.weather[0].description}
                  icon={weather.weather[0].icon}
                  wind={weather.speed}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default MainWeather;
