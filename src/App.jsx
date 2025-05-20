import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./pages/Home";
import Hospitals from "./pages/Hospitals";
import Doctors from "./pages/Doctors";
import Treatments from "./pages/Treatments";
import Knowledge from "./pages/Knowledge";
import Review from "./pages/Review";
import ContactUs from "./pages/ContactUs";
import About from "./pages/About";
import Footer from "./Components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hospitals" element={<Hospitals />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/treatments" element={<Treatments />} />
        <Route path="/knowledge" element={<Knowledge />} />
        <Route path="/review" element={<Review />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
