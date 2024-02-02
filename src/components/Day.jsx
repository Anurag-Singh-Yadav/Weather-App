import React from "react";

function Day({ dt, condition, day, night, p, wind, h, icon }) {
  const date = new Date(dt * 1000);
  const weekday = date.toLocaleDateString("en-US", { weekday: "long" });
  return (
    <div className="grid grid-cols-5 justify-between items-center box-shadow1 my-2 px-2 font-semibold">
      <div className=" col-span-3">
        <div className="item-center flex items-center justify-center my-1 font-medium">
          {weekday}
        </div>
        <div className="grid grid-cols-2 text-sm gap-2">
          <div>Day: {day}°C</div>
          <div>
            Night: {""}
            {night}°C
          </div>
          <div>Pressure: {p}hPa</div>
          <div>Wind: {wind}m/s</div>
          <div>Humidity: {h}%</div>
        </div>
      </div>
      <div className="col-span-2">
        <div className="flex flex-col justify-between items-center gap-3">
          <div className="w-12">
            <img src={`./${icon}.png`} alt="icon" />
          </div>
          <div>{condition}</div>
        </div>
      </div>
    </div>
  );
}
export default Day;
