import React from "react";

const TimeAndLocation = () => {
  return (
    <div>
      <div className="my-6 flex items-center justify-center">
        <p className="text-xl font-extralight text-white">
          Tuesday, 31 may 2022 local time: 12:46pm
        </p>
      </div>

      <div className="my-3 flex items-center justify-center">
        <p className="text-3xl font-medium text-white">Berlin, DE</p>
      </div>
    </div>
  );
};

export default TimeAndLocation;
