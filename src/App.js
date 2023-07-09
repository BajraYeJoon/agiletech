import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";

import Contact from "./pages/Contact";

import Service from "./pages/Service";
import ServiceDetails from "./pages/ServiceDetails";
import Team from "./pages/Team";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import ScrollToTop from "react-scroll-to-top";
import HomeFive from "./pages/HomeFive";
function App() {
  useEffect(() => {
    AOS.init({
      offset: 0,
      easing: "ease",
      once: true,
    });
    AOS.refresh();
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomeFive />} />
        <Route exact path="/about" element={<About />} />

        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/service" element={<Service />} />
        <Route exact path="/service-details" element={<ServiceDetails />} />
        <Route exact path="/team" element={<Team />} />
      </Routes>
      <ScrollToTop smooth color="#246BFD" />
    </BrowserRouter>
  );
}

export default App;
