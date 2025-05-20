import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="bg-green-800 text-white py-12 mt-16">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-4 sm:grid-cols-2 gap-8">
          <div>
            <h4 className="text-xl font-semibold mb-4">Heal Hub</h4>
            <p className="text-sm text-gray-200">
              Your trusted partner for world-class medical treatment and travel
              facilitation in India. Quality care, simplified journeys.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-200">
              <li>
                <a href="/" className="hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="/treatments" className="hover:text-white">
                  Treatments
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-200">
              <li>📞 +91-8700590820</li>
              <li>✉️ contact@healhub.com</li>
              <li>📍 New Delhi, India</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white text-gray-200">
                🌐
              </a>
              <a href="#" className="hover:text-white text-gray-200">
                📘
              </a>
              <a href="#" className="hover:text-white text-gray-200">
                📸
              </a>
              <a href="#" className="hover:text-white text-gray-200">
                🐦
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-green-700 pt-6 text-center text-sm text-gray-300">
          © {new Date().getFullYear()} Heal Hub. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Footer;
