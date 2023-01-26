import React from "react";

const Forecast = ({ title }) => {
  return (
    <div>
      <div className="mt-6 flex  items-center justify-start">
        <p className="font-medium uppercase text-white">{title}</p>
      </div>
      <hr className="my-2" />

      <div className="flex flex-row items-center justify-between text-white">
        <div className="flex flex-col items-center justify-center">
          <p className="text-sm font-light">04:30 ame</p>
          <img
            src="http://openweathermap.org/img/wn/01d@2x.png"
            alt=""
            className="my-1 w-12"
          />
          <p className="font-medium">22°</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="text-sm font-light">04:30 PM</p>
          <img
            src="http://openweathermap.org/img/wn/01d@2x.png"
            alt=""
            className="my-1 w-12"
          />
          <p className="font-medium">22°</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="text-sm font-light">04:30 PM</p>
          <img
            src="http://openweathermap.org/img/wn/01d@2x.png"
            alt=""
            className="my-1 w-12"
          />
          <p className="font-medium">22°</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="text-sm font-light">04:30 PM</p>
          <img
            src="http://openweathermap.org/img/wn/01d@2x.png"
            alt=""
            className="my-1 w-12"
          />
          <p className="font-medium">22°</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="text-sm font-light">04:30 PM</p>
          <img
            src="http://openweathermap.org/img/wn/01d@2x.png"
            alt=""
            className="my-1 w-12"
          />
          <p className="font-medium">22°</p>
        </div>
      </div>
    </div>
  );
};

export default Forecast;
