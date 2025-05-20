import React from "react";
import { Link } from "react-router-dom";

const commonProcedures = [
  {
    category: "Bariatric Surgery",
    procedures: [
      "Sleeve Gastrectomy Surgery",
      "Tummy Tuck Surgery",
      "Liposuction Surgery",
    ],
  },
  {
    category: "Orthopedics",
    procedures: [
      "Knee Replacement",
      "Shoulder Replacement",
      "Hip Replacement",
      "Spinal Surgery",
    ],
  },
  {
    category: "Cardiology",
    procedures: [
      "Coronary Angioplasty",
      "Coronary Artery Bypass Grafting (CABG)",
      "Pacemaker Implant",
      "Valve Replacement",
    ],
  },
  {
    category: "Transplant Surgery",
    procedures: [
      "Bone Marrow Transplant",
      "Liver Transplant",
      "Kidney Transplant",
    ],
  },
  {
    category: "Cosmetic Surgery",
    procedures: [
      "Breast Augmentation",
      "Reconstructive Surgery",
      "Rhinoplasty (Nose job)",
      "Facelift",
    ],
  },
  {
    category: "General Surgery",
    procedures: [
      "Haemorrhoids (Piles) Surgery",
      "Appendix Surgery",
      "Gall Bladder Removal",
      "Kidney Stone Removal",
    ],
  },
];

const Home = () => (
  <div className="max-w-6xl mx-auto p-8 bg-white rounded-lg shadow-md">
    <h2 className="text-3xl font-extrabold mb-10 text-green-800 border-b-4 border-green-600 pb-2">
      COMMON PROCEDURES
    </h2>
    <div className="grid md:grid-cols-2 gap-10">
      {commonProcedures.map(({ category, procedures }) => (
        <div key={category}>
          <h3 className="text-2xl font-semibold mb-4 text-green-700">{category}</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg">
            {procedures.map((procedure) => (
              <li key={procedure} className="hover:text-green-600 cursor-pointer transition">
                {procedure}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
    <div className="flex justify-center mt-12">
      <Link
        to="/treatments"
        className="px-6 py-3 bg-green-700 text-white text-lg font-semibold rounded-lg shadow hover:bg-green-800 transition"
      >
        View All Procedures
      </Link>
    </div>
  </div>
);

export default Home;
