import React from "react";

function Hourly({ dt, h, t, feel, dis, dxt, icon}) {
  const dateTime = new Date(dxt);
  const timeString = dateTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });

  return (
    <div className="flex flex-wrap justify-between my-2 font-semibold text-sm px-2 py-2 gap-2 box-shadow1">
      <div>{timeString}</div>
      <div>{Math.round(t)}/{Math.round(feel)}°C</div>
      <div>{Math.round(h)}%</div>
      <div>{dis}</div>
      <div className="w-8">
        <img src={`./${icon}.png`} alt="icon"></img>
      </div>
    </div>
  );
}

export default Hourly;
