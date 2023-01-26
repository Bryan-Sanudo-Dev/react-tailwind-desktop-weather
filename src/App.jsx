import React from "react";
import TopButtons from "@/components/TopButtons";
import Inputs from "@/components/Inputs";
import TimeAndLocation from "@/components/TimeAndLocation";
import TemperatureAndDetails from "@/components/TemperatureAndDetails";
import Forecast from "@/components/Forecast";

function App() {
  return (
    <div className="mx-auto mt-4 h-fit max-w-screen-md bg-gradient-to-br from-cyan-700 to-blue-700 py-5 px-32 shadow-xl shadow-gray-400">
      <TopButtons />
      <Inputs />

      <TimeAndLocation />
      <TemperatureAndDetails />
      <Forecast title="hourly forecast" />
      <Forecast title="daily forecast" />
    </div>
  );
}

export default App;
