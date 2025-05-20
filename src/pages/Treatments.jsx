import React from "react";

const treatmentsDetails = [
  {
    category: "Bariatric Surgery",
    procedures: [
      "Gastric Balloon Surgery",
      "Gastric Bypass Surgery",
      "Sleeve Gastrectomy Surgery",
      "Tummy Tuck Surgery",
      "Liposuction Surgery",
      "Lap Band Surgery",
    ],
  },
  {
    category: "Cardiology",
    procedures: [
      "Coronary Angioplasty",
      "Coronary Artery Bypass Grafting (CABG)",
      "Pacemaker Implant",
      "Balloon Valvuloplasty",
      "Valve Replacement",
      "Pediatric Cardiac Surgery",
    ],
  },
  {
    category: "Cosmetic Surgery",
    procedures: [
      "Breast Augmentation",
      "Hair Transplant",
      "Reconstructive Surgery",
      "Eyelid Surgery",
      "Rhinoplasty (Nose job)",
      "Lip Augmentation",
    ],
  },
  {
    category: "Transplant Surgery",
    procedures: [
      "Bone Marrow Transplant",
      "Liver Transplant",
      "Lung Transplant",
      "Heart Transplant",
      "Kidney Transplant",
      "Corneal Transplant",
      "Hair Transplant",
    ],
  },
  {
    category: "Orthopedics",
    procedures: [
      "Knee Replacement Surgery",
      "Shoulder Replacement Surgery",
      "Hand and Wrist Surgery",
      "Anterior Cruciate Ligament (ACL) Reconstruction",
      "Hip Replacement Surgery",
      "Ankle Replacement Surgery",
      "Elbow Replacement Surgery",
    ],
  },
  {
    category: "General Surgery",
    procedures: [
      "Haemorrhoids (Piles) Surgery",
      "Appendix Surgery",
      "Gall Bladder Removal Surgery",
      "Spleenectomy",
      "Breast Tumor Removal",
      "Thyroidectomy",
    ],
  },
  {
    category: "Oncology",
    procedures: [
      "Blood Cancer",
      "Bone Cancer",
      "Breast Cancer",
      "Pancreatic Cancer",
      "Liver Cancer",
      "Stomach (Gastric) Cancer",
      "Lung Cancer",
      "Bladder Cancer",
      "Colon Cancer",
    ],
  },
  {
    category: "Spinal Surgery",
    procedures: [
      "Kyphosis Surgery",
      "Scoliosis surgery",
      "Endoscopic Spine Surgery",
      "Slipped Disc Treatment",
      "Spine Tumor Removal",
      "Corpectomy",
    ],
  },
  {
    category: "Opthalmology",
    procedures: [
      "LASIK Eye Surgery",
      "Glaucoma Surgery",
      "Corneal Transplant",
      "Retina Surgery",
      "Squint Surgery",
      "Cataract Surgery",
      "Artificial Iris Implantation",
    ],
  },
  {
    category: "Neurosciences",
    procedures: [
      "Epilepsy",
      "Neuropsychology",
      "Deep Brain Stimulation Surgery",
      "Brain Tumor Surgery",
      "Vagus Nerve Stimulation",
      "Gamma Knife Surgery",
      "Brain Aneurysm",
    ],
  },
  {
    category: "Urology",
    procedures: [
      "Prostate Surgery",
      "Kidney Stone Removal",
      "Erectile Dysfunction",
      "Bladder Stone Removal",
      "Epididymal Cyst Removal",
      "Vasectomy",
      "Varicocelectomy",
    ],
  },
  {
    category: "Ear Nose & Throat",
    procedures: [
      "Cochlear Implant",
      "Goitre Removal Surgery",
      "Laser Stapedectomy",
      "Micro Laryngeal Surgery",
      "Laryngectomy Surgery",
      "Functional Endoscopic Sinus Surgery (FESS)",
      "Thyroidectomy",
    ],
  },
  {
    category: "Nephrology",
    procedures: [
      "Glomerulonephritis",
      "Kidney Tumor",
      "Pyeloplasty",
      "RIRS Surgery",
    ],
  },
  {
    category: "Infertility",
    procedures: [
      "In-Vitro Fertilisation (IVF)",
    ],
  },
];

const Treatments = () => (
  <div className="max-w-6xl mx-auto p-8 bg-white rounded-lg shadow-md">
    <h2 className="text-3xl font-extrabold mb-8 text-green-800 border-b-4 border-green-600 pb-3">
      Discover World-Class Medical Treatment in India - Your Gateway to Quality Healthcare
    </h2>
    <p className="mb-12 text-gray-700 leading-relaxed text-lg">
      Looking for top-notch medical treatment options? India boasts a thriving medical tourism industry that offers an extensive range of world-class healthcare services. India's healthcare landscape is renowned for its expertise and affordability. The country's medical facilities are equipped with state-of-the-art technology and staffed by skilled medical professionals, ensuring exceptional patient care and positive outcomes.
    </p>

    <h3 className="text-2xl font-semibold mb-6 text-green-700 border-b border-green-400 pb-1">
      ALL PROCEDURES
    </h3>

    <div className="grid md:grid-cols-2 gap-10 mb-12">
      {treatmentsDetails.map(({ category, procedures }) => (
        <div key={category}>
          <h4 className="text-xl font-semibold mb-4 text-green-700">{category}</h4>
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

    <p className="mt-8 text-gray-700 text-lg leading-relaxed">
      If your condition or treatment is not mentioned above, simply provide us with your detailed medical reports and specific treatment requirements, and our team will provide you with a personalized consultation.
    </p>
    <p className="mt-4 text-gray-700 text-lg leading-relaxed">
      Your health is our top priority, and we are here to assist you in every way we can. Contact us today to explore your treatment options.
    </p>
  </div>
);

export default Treatments;