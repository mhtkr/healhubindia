import React from "react";

const FeatCards = (props) => {
  return (
    <div>
      <div className="flex flex-col items-center bg-green-200 rounded-lg py-4">
        <img
          src={props.image}
          className="w-1/2 max-w-xs sm:max-w-xs md:max-w-sm lg:max-w-m xl:max-w-lg h-auto"
        />
        <h2>{props.title}</h2>
      </div>
    </div>
  );
};

export default FeatCards;
