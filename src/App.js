import React, { useState, useEffect } from "react";
import ReactGA from "react-ga";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Resume from "./Components/Resume";
import Contact from "./Components/Contact";
import Testimonials from "./Components/Testimonials";
import Portfolio from "./Components/Portfolio";
import axios from "axios";

function App() {
  const [data, setData] = useState({ resumeData: [] });

  useEffect(() => {
    ReactGA.initialize("UA-122881407-1");
    ReactGA.pageview(window.location.pathname);
    const fetchData = async() => {
      const result = await axios("/resumeData.json");

      setData(result.data);
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <Header data={data.main} />
      <About data={data.main} />
      <Resume data={data.resume} />
      <Portfolio data={data.portfolio} />
      <Testimonials data={data.testimonials} />
      <Contact data={data.main} />
      <Footer data={data.main} />
    </div>
  );
}

export default App;
