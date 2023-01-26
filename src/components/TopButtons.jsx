import React from "react";

const TopButtons = () => {
  const cities = [
    {
      id: 1,
      title: "London",
    },
    {
      id: 2,
      title: "Sydney",
    },
    {
      id: 3,
      title: "Tokyo",
    },
    {
      id: 4,
      title: "Toronto",
    },
    {
      id: 5,
      title: "Paris",
    },
  ];

  return (
    <div className="my-6 flex items-center justify-around">
      {cities.map(({ id, title }) => (
        <button key={id} className="text-lg font-medium text-white">
          {title}
        </button>
      ))}
    </div>
  );
};

export default TopButtons;
