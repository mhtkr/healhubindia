import pros from "../assets/pros.png";

const Banner = () => {
  return (
    <section className="bg-gradient-to-br from-green-500 to-green-800 text-white py-16 px-4">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">
          HEAL HUB INDIA
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl font-light text-green-100 max-w-2xl">
          Your Gateway to Exceptional Medical Care!
        </p>

        <div className="w-full max-w-2xl mt-8 flex items-center bg-green-100 rounded-full overflow-hidden shadow-lg">
          <input
            type="text"
            placeholder="Search for Hospitals, Doctors, etc."
            className="flex-1 px-6 py-3 text-green-800 bg-green-100 placeholder-green-600 outline-none focus:ring-2 focus:ring-green-300"
          />
          <button className="p-4 bg-white hover:bg-green-50 transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#2e7d32"
            >
              <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
            </svg>
          </button>
        </div>

        <div className="mt-12">
          <img
            src={pros}
            alt="Medical professionals illustration"
            className="w-full max-w-3xl h-auto rounded-lg shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
