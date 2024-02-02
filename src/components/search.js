const apiKey = process.env.REACT_APP_API_KEY;

export async function getWeatherData(city) {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
  const data = await response.json();
  return data;
}

export async function getForecastHourlyData(city) {
  const response = await fetch(`https://pro.openweathermap.org/data/2.5/forecast/hourly?q=${city}&appid=${apiKey}&units=metric&cnt=24`);
  const data = await response.json();
  return data.list;
}

export async function getForecastDailyData(city) {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&cnt=6&appid=${apiKey}&units=metric`);
  const data = await response.json();
  console.log('data ',data);
  return data.list;
}
