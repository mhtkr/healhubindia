import React from "react";
import FeatCards from "./Items/FeatCards";
import hospital from "../assets/hospital.png";
import clients from "../assets/clients.png";
import doctors from "../assets/doctors.png";
import savings from "../assets/savings.png";
import location from "../assets/location.png";

const Banner = () => {
  return (
    <div  className="bg-gradient-to-r from-green-400 to-green-800 p-8 text-center text-white flex flex-col justify-center items-center">
      <div>
        <h1 className="text-6xl">HEAL HUB INDIA</h1>
        <p className="text-2xl">Your Gateway to Exceptional Medical Care!</p>
      </div>
      <div className="w-1/2 display flex gap-4 mt-8">
        <input type="text" placeholder="Search for Hospitals, Doctors, etc." className="w-full p-4 outline-none bg-green-100 rounded-full text-green-800"/>
        <div className="bg-green-100 p-4 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#70b28c"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>
        </div>
      </div>
      <div className="display flex items-center justify-center gap-20 mt-8 text-black px-15 py-5 w-full rounded-lg">
        <FeatCards image={hospital} title="50+ Hospitals"/>
        <FeatCards image={clients} title="2500+ Happy Clients"/>
        <FeatCards image={doctors} title="250+ Doctors"/>
        <FeatCards image={savings} title="Upto 25% Savings"/>
        <FeatCards image={location} title="10+ Locations"/>
      </div>
    </div>
  );
};

export default Banner;
