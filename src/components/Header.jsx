import React, { useEffect, useState } from "react";

function Header({ setMode, setLocation }) {
  const [locationInput, setLocationInput] = useState("");

  useEffect(() => {
    const modeSlider = document.getElementById("modeSlider");

    const handleSliderChange = () => {
      let mode = "Default";
      switch (parseInt(modeSlider.value)) {
        case 1:
          setMode("Light");
          mode = "Light";
          break;
        case 2:
          setMode("Default");
          mode = "Default";
          break;
        case 3:
          setMode("Dark");
          mode = "Dark";
          break;
        default:
          break;
      }
      document.getElementById("modeText").innerText = mode;
    };

    modeSlider.addEventListener("input", handleSliderChange);

    return () => {
      modeSlider.removeEventListener("input", handleSliderChange);
    };
  }, [setMode]);

  const handleLocationChange = (e) => {
    e.preventDefault();
    const { value } = e.target;
    setLocationInput(value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setLocation(locationInput);
    console.log("Search clicked", locationInput);
    setLocationInput("");
  };

  return (
    <div>
      <div className="hidden md:grid grid-cols-6 gap-3 justify-between items-center shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] p-3">
        <div className="w-24 mx-auto col-span-1  p-2 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]">
          <img src="./logo.png" className="w-full h-full" alt="logo" />
        </div>

        <div className="col-span-4 text-center font-bold text-xl sm:text-2xl md:text-4xl flex justify-center items-center h-full w-full shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]">
          Weather App
        </div>

        <div className="mode-switch flex flex-col justify-center px-2  col-span-1 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] h-full">
          <input
            type="range"
            min="1"
            max="3"
            defaultValue="2"
            className="slider"
            id="modeSlider"
          />
          <p className="text-xs sm:text-sm">
            Mode: <span id="modeText">Default</span>
          </p>
        </div>
      </div>





      <div className="md:hidden flex flex-col gap-2 justify-between items-center shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] p-3">
        <div className="text-center font-bold py-2  text-xl sm:text-4xl  flex justify-center items-center h-full w-full shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]">
          Weather App
        </div>


        <div className="flex justify-between items-center px-4 w-full mx-auto border-2">
          <div className="w-16 col-span-1  p-2 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]">
            <img src="./logo.png" className="w-full h-full" alt="logo" />
          </div>
          <div className="mode-switch flex flex-col justify-center px-2  col-span-1 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] h-full">
            <input
              type="range"
              min="1"
              max="3"
              defaultValue="2"
              className="slider py-2"
              id="modeSlider"
            />
            <p className="text-xs w-full text-center sm:text-sm">
              Mode: <span id="modeText">Default</span>
            </p>
          </div>
        </div>
      </div>


      <div
        id="search-container"
        className="grid grid-cols-1 gap-y-2 sm:gap-2 py-2 sm:grid-cols-6 "
      >
        <div
          id="location-input-div"
          className="col-span-5 rounded-md  mx-2 border-2 border-black"
        >
          <input
            type="text"
            className="w-full h-full px-4  py-2"
            id="location-input-field"
            placeholder="Enter location..."
            value={locationInput}
            onChange={handleLocationChange}
          />
        </div>
        <div className="col-span-1 text-xm md:text-base md:font-bold  border-2 border-black rounded-md py-2 sm:ml-0 ml-2 mr-2 text-center">
          <button id="search-button" onClick={handleSearch}>
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
