import Navbar from "../Components/Navbar";
import Banner from "../Components/Banner";
import CommonProcedures from "../Components/Items/CommonProcedures";

const Home = () => {
  return (
    <div>
      <Banner />
      <CommonProcedures />

      <section className="max-w-6xl mx-auto px-4 py-16 flex flex-col md:flex-row items-center gap-10">
        <div className="w-full md:w-1/2">
          <img
            src="/logo2.png"
            alt="Heal Hub Illustration"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-4xl font-bold text-green-800 mb-6">
            Welcome to Heal Hub!
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Heal Hub is one of the most trusted medical tourism brands in India,
            with over <strong>10+ years</strong> of experience and more than{" "}
            <strong>2500+ international patients</strong> served.
            <br />
            <br />
            We offer comprehensive healthcare solutions — combining world-class
            treatments, tailored budgets, and premium accommodation options.
            <br />
            <br />
            Our mission is to connect global patients with top Indian hospitals
            and renowned medical professionals, while making the journey
            stress-free, safe, and supportive.
            <br />
            <br />
            Heal Hub is your trusted partner for modern procedures, specialized
            care, and expert second opinions.
          </p>
        </div>
      </section>

      <section className="bg-gray-100 py-14">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h3 className="text-2xl md:text-3xl font-semibold text-green-800 mb-10">
            Heal Hub has assisted numerous people in receiving the best
            treatment at a reasonable cost
          </h3>
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            <img
              src="/bd.png"
              alt="Bangladesh Flag"
              className="w-16 h-10 object-contain hover:scale-110 transition-transform duration-200"
            />
            <img
              src="/eth.png"
              alt="Ethiopia Flag"
              className="w-16 h-10 object-contain hover:scale-110 transition-transform duration-200"
            />
            <img
              src="/nig.png"
              alt="Nigeria Flag"
              className="w-16 h-10 object-contain hover:scale-110 transition-transform duration-200"
            />
            <img
              src="/omn.png"
              alt="Oman Flag"
              className="w-16 h-10 object-contain hover:scale-110 transition-transform duration-200"
            />
            <img
              src="/tan.jpeg"
              alt="Tanzania Flag"
              className="w-16 h-10 object-contain hover:scale-110 transition-transform duration-200"
            />
            <img
              src="/uz.png"
              alt="Uzbekistan Flag"
              className="w-16 h-10 object-contain hover:scale-110 transition-transform duration-200"
            />
            <img
              src="/ir.jpeg"
              alt="Iran Flag"
              className="w-16 h-10 object-contain hover:scale-110 transition-transform duration-200"
            />
            <img
              src="/kaz.png"
              alt="Kazakhstan Flag"
              className="w-16 h-10 object-contain hover:scale-110 transition-transform duration-200"
            />
            <img
              src="/ken.jpeg"
              alt="Kenya Flag"
              className="w-16 h-10 object-contain hover:scale-110 transition-transform duration-200"
            />
            <img
              src="/ngr.png"
              alt="Niger Flag"
              className="w-16 h-10 object-contain hover:scale-110 transition-transform duration-200"
            />
            <img
              src="/phil.png"
              alt="Philippines Flag"
              className="w-16 h-10 object-contain hover:scale-110 transition-transform duration-200"
            />
            <img
              src="/yem.png"
              alt="Yemen Flag"
              className="w-16 h-10 object-contain hover:scale-110 transition-transform duration-200"
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-center text-green-800 mb-12">
            HOW WE WORK?
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-md transition">
              <div className="text-4xl font-bold text-green-700 mb-4">1</div>
              <h4 className="text-xl font-semibold mb-2">Consult</h4>
              <p className="text-gray-700">
                We understand your unique healthcare needs through detailed
                consultation.
              </p>
            </div>

            <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-md transition">
              <div className="text-4xl font-bold text-green-700 mb-4">2</div>
              <h4 className="text-xl font-semibold mb-2">Assess</h4>
              <p className="text-gray-700">
                We seek multiple opinions from hospitals and experts, which are
                sent to you for review and selection.
              </p>
            </div>

            <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-md transition">
              <div className="text-4xl font-bold text-green-700 mb-4">3</div>
              <h4 className="text-xl font-semibold mb-2">Coordinate</h4>
              <p className="text-gray-700">
                We manage all logistics including travel, hospital admission,
                and pre-arrival arrangements.
              </p>
            </div>

            <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-md transition">
              <div className="text-4xl font-bold text-green-700 mb-4">4</div>
              <h4 className="text-xl font-semibold mb-2">Treatment</h4>
              <p className="text-gray-700">
                You receive medical care at the hospital of your choice with
                expert guidance throughout.
              </p>
            </div>

            <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-md transition">
              <div className="text-4xl font-bold text-green-700 mb-4">5</div>
              <h4 className="text-xl font-semibold mb-2">Support</h4>
              <p className="text-gray-700">
                We offer continuous support during and after treatment, ensuring
                your comfort and confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold text-green-800 mb-12">
            WHY USE Heal Hub?
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
              <h4 className="text-xl font-semibold text-green-700 mb-3">
                Free to Use
              </h4>
              <p className="text-gray-700 text-sm">
                Patients can browse our website, research independently, submit
                queries, and access our services—all without any cost.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
              <h4 className="text-xl font-semibold text-green-700 mb-3">
                Accredited Hospitals
              </h4>
              <p className="text-gray-700 text-sm">
                We carefully select globally accredited hospitals to ensure you
                receive top-quality and trustworthy care every time.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
              <h4 className="text-xl font-semibold text-green-700 mb-3">
                Medical Travel Facilitation
              </h4>
              <p className="text-gray-700 text-sm">
                We guide you to the best hospitals and doctors while managing
                all your travel, lodging, and logistics needs—so you can focus
                on healing.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
              <h4 className="text-xl font-semibold text-green-700 mb-3">
                24/7 Availability
              </h4>
              <p className="text-gray-700 text-sm">
                Our team is available around the clock via email, mobile, or
                chat to provide help whenever you need it—every day of the year.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
