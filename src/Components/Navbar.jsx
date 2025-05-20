import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const hospitals = [
  "Manipal Hospitals", "Max Hospital", "Aakash Hospital", "Artemis Hospital",
  "BLK Hospital", "Apollo Hospital", "Jaypee Hospital", "Medanta Hospital",
  "Fortis Escorts Heart Institute", "Fortis Hospital", "Amrita Hospital"
];

const doctors = [
  "Oncologists", "Orthopedists", "Cardiologists", "Transplant Specialists",
  "Plastic Surgeons", "Neurologists", "Urologists", "Nephrologists"
];

const treatments = [
  "Cardiology", "Cosmetic Surgery", "Transplant Surgery", "Orthopedics",
  "General Surgery", "Oncology", "Spinal Surgery", "Ophthalmology",
  "Neurology", "Urology", "Nephrology", "ENT", "Infertility"
];

const bariatricSubmenu = [
  "Gastric Balloon Surgery Cost in India", "Liposuction Surgery Cost in India",
  "Tummy Tuck Surgery Cost in India", "Sleeve Gastrectomy Surgery Cost in India",
  "Gastric Bypass Surgery Cost in India", "Lap Band Surgery Cost in India"
];

const Navbar = () => {
  const [isBariatricOpen, setIsBariatricOpen] = useState(false);

  return (
    <div className="bg-green-800 flex justify-between items-center p-4">
      <div className="flex items-center gap-4">
        <img src={logo} alt="HealHubIndia" className="h-16 w-16" />
        <h1 className="text-xl font-bold text-white">Heal Hub India</h1>
      </div>
      <nav className="flex-grow">
        <ul className="flex justify-end items-center gap-6">
          <li>
            <Link to="/" className="text-white hover:text-gray-300 transition duration-200">
              Home
            </Link>
          </li>
          <li className="relative group">
            <Link to="/hospitals" className="text-white hover:text-gray-300 transition duration-200">
              Hospitals
            </Link>
            <div className="absolute bg-white hidden group-hover:block w-48 shadow-lg rounded-lg z-10">
              <ul className="py-2">
                {hospitals.map((hospital, index) => (
                  <li key={index}>
                    <Link to="/hospitals" className="block px-4 py-2 text-gray-700 hover:bg-green-100">
                      {hospital}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>
          <li className="relative group">
            <Link to="/doctors" className="text-white hover:text-gray-300 transition duration-200">
              Doctors
            </Link>
            <div className="absolute bg-white hidden group-hover:block w-48 shadow-lg rounded-lg z-10">
              <ul className="py-2">
                {doctors.map((doctor, index) => (
                  <li key={index}>
                    <Link to="/doctors" className="block px-4 py-2 text-gray-700 hover:bg-green-100">
                      {doctor}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>
          <li className="relative group">
            <Link to="/treatments" className="text-white hover:text-gray-300 transition duration-200">
              Treatments
            </Link>
            <div className="absolute bg-white hidden group-hover:block w-48 shadow-lg rounded-lg z-10">
              <ul className="py-2">
                <li className="relative">
                  <button
                    onClick={() => setIsBariatricOpen(!isBariatricOpen)}
                    className="w-full text-left px-4 py-2 text-gray-700 hover:bg-green-100 focus:outline-none"
                  >
                    Bariatric Surgery
                  </button>
                  {isBariatricOpen && (
                    <div className="absolute bg-white w-64 shadow-lg left-full top-0 rounded-lg z-20">
                      <ul className="py-2">
                        {bariatricSubmenu.map((item, index) => (
                          <li key={index}>
                            <Link to="/treatments" className="block px-4 py-2 text-gray-700 hover:bg-green-100">
                              {item}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
                {treatments.map((treatment, index) => (
                  <li key={index}>
                    <Link to="/treatments" className="block px-4 py-2 text-gray-700 hover:bg-green-100">
                      {treatment}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>
          <li>
            <Link to="/knowledge" className="text-white hover:text-gray-300 transition duration-200">
              Knowledge
            </Link>
          </li>
          <li>
            <Link to="/review" className="text-white hover:text-gray-300 transition duration-200">
              Review
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-white hover:text-gray-300 transition duration-200">
              Contact Us
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-white hover:text-gray-300 transition duration-200">
              About
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
