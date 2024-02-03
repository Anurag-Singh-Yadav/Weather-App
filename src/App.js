import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import MainWeather from "./components/MainWeather";
import {
  getWeatherData,
  getForecastDailyData,
  getForecastHourlyData,
} from "./components/search";
import { toast } from "react-toastify";

function App() {
  const [mode, setMode] = useState("Default");
  const [currentWeather, setCurrentWeather] = useState(null);
  const [hourlyWeather, setHourlyWeather] = useState(null);
  const [dailyWeather, setDailyWeather] = useState(null);
  const [location, setLocation] = useState("");
  const [flag, setFlag] = useState(false);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const body = document.getElementById("body");
    if (body) {
      body.classList.remove("mode1", "mode2", "mode3");
      if (mode === "Default") {
        body.classList.add("mode1");
      } else if (mode === "Light") {
        body.classList.add("mode2");
      } else if (mode === "Dark") {
        body.classList.add("mode3");
      }
    }
  }, [mode]);

  useEffect(() => {

    setFlag(false);
    const fetchData = async () => {
      try {
        if (location) {
          setLoading(true);
          const currentWeatherResult = await getWeatherData(location);
          
          if(currentWeatherResult.cod === "404"){
            setFlag(false);
            setLoading(false);
            toast.error("City not found");
            return;
          }

          setCurrentWeather(currentWeatherResult);

          const dailyWeatherResult = await getForecastDailyData(location);
          setDailyWeather(dailyWeatherResult);

          const hourlyWeatherResult = await getForecastHourlyData(location);
          setHourlyWeather(hourlyWeatherResult);
          setLoading(false);
          toast.success('Weather')
          setFlag(true);
        }
      } catch (error) {
        setFlag(false);
        setLoading(false);
      }
    };
    fetchData();
  }, [location]);

  return (
    <div id="body" className="px-2 md:px-8 min-h-screen py-2 mode2">
      <div
        className={`w-full min-h-[98vh] md:w-3/4  mx-auto ${
          mode === "Dark" ? "mode3" : "bg-gray-50"
        }`}
      >
        <Header setMode={setMode} setLocation={setLocation} />
        {flag && (
          <MainWeather
            currentWeather={currentWeather}
            hourlyWeather={hourlyWeather}
            dailyWeather={dailyWeather}
            flag={flag}
          />
        )}

        {!flag && (
          <div className="text-center font-bold text-3xl mt-5">Enter Location...</div>
        )}
        {
          loading && <div className="custom-loader mx-auto mt-6"></div>
        }
          
      </div>
    </div>
  );
}

export default App;
