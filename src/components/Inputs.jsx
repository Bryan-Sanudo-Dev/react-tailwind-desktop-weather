import React from "react";
import { UilSearch, UilLocationPoint } from "@iconscout/react-unicons";

const Inputs = () => {
  return (
    <div className="my-6 flex flex-row justify-center">
      <div className="flex w-3/4 flex-row items-center justify-center space-x-4">
        <input
          type="text"
          className="w-full p-2 text-xl font-light capitalize shadow-xl placeholder:lowercase focus:outline-none"
          placeholder="Search for city..."
        />
        <UilSearch
          size={25}
          className="cursor-pointer text-white transition ease-out hover:scale-125"
        />
        <UilLocationPoint
          size={25}
          className="cursor-pointer text-white transition ease-out hover:scale-125"
        />
      </div>

      <div className="flex w-1/4 flex-row items-center justify-center">
        <button name="metric" className="text-xl font-light text-white">
          °C
        </button>
        <p className="mx-1 text-xl text-white">|</p>
        <button name="imperial" className="text-xl font-light text-white">
          °F
        </button>
      </div>
    </div>
  );
};

export default Inputs;
