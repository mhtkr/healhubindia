import React, { useState } from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isBariatricOpen, setIsBariatricOpen] = useState(false);

  return (
    <div className="bg-linear-to-r from-green-800 to-green-400 flex justify-between items-center p-4">
      <div className="flex items-center gap-4">
        <img src={logo} alt="HealHubIndia" className="h-16 w-16" />
        <h1 className="text-xl font-bold text-white">Heal Hub India</h1>
      </div>

      <nav className="flex-grow">
        <ul className="flex justify-end items-center gap-6">
          <li>
            <a href="#" className="text-white hover:text-gray-300 transition duration-200">
              Home
            </a>
          </li>

          <li className="relative group">
            <a href="#" className="text-white hover:text-gray-300 transition duration-200">
              Hospitals
            </a>
            <div className="absolute bg-white hidden group-hover:block w-48 shadow-lg rounded-lg">
              <ul className="py-2">
                {[
                  "Manipal Hospitals",
                  "Max Hospital",
                  "Aakash Hospital",
                  "Artemis Hospital",
                  "BLK Hospital",
                  "Apollo Hospital",
                  "Jaypee Hospital",
                  "Medanta Hospital",
                  "Fortis Escorts Heart Institute",
                  "Fortis Hospital",
                  "Amrita Hospital",
                ].map((hospital, index) => (
                  <li key={index}>
                    <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-green-100">
                      {hospital}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>

          <li className="relative group">
            <a href="#" className="text-white hover:text-gray-300 transition duration-200">
              Doctors
            </a>
            <div className="absolute bg-white hidden group-hover:block w-48 shadow-lg rounded-lg">
              <ul className="py-2">
                {[
                  "Oncologists",
                  "Orthopedists",
                  "Cardiologists",
                  "Transplant Specialists",
                  "Plastic Surgeons",
                  "Neurologists",
                  "Urologists",
                  "Nephrologists",
                ].map((doctor, index) => (
                  <li key={index}>
                    <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-green-100">
                      {doctor}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>

          <li className="relative group">
            <a href="#" className="text-white hover:text-gray-300 transition duration-200">
              Treatments
            </a>
            <div className="absolute bg-white hidden group-hover:block w-48 shadow-lg rounded-lg">
              <ul className="py-2">
                <li className="relative">
                  <button
                    onClick={() => setIsBariatricOpen(!isBariatricOpen)}
                    className="w-full text-left px-4 py-2 text-gray-700 hover:bg-green-100 focus:outline-none"
                  >
                    Bariatric Surgery
                  </button>
                  {isBariatricOpen && (
                    <div className="absolute bg-white w-48 shadow-lg left-full top-0 rounded-lg">
                      <ul className="py-2">
                        {[
                          "Gastric Balloon Surgery Cost in India",
                          "Liposuction Surgery Cost in India",
                          "Tummy Tuck Surgery Cost in India",
                          "Sleeve Gastrectomy Surgery Cost in India",
                          "Gastric Bypass Surgery Cost in India",
                          "Lap Band Surgery Cost in India",
                        ].map((treatment, index) => (
                          <li key={index}>
                            <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-green-100">
                              {treatment}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
                {[
                  "Cardiology",
                  "Cosmetic Surgery",
                  "Transplant Surgery",
                  "Orthopedics",
                  "General Surgery",
                  "Oncology",
                  "Spinal Surgery",
                  "Ophthalmology",
                  "Neurology",
                  "Urology",
                  "Nephrology",
                  "ENT",
                  "Infertility",
                ].map((treatment, index) => (
                  <li key={index}>
                    <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-green-100">
                      {treatment}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>

          {["Knowledge", "Review", "Contact Us", "About"].map((link, index) => (
            <li key={index}>
              <a href="#" className="text-white hover:text-gray-300 transition duration-200">
                {link}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;