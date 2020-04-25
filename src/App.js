import React, { useContext } from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
import Testimonials from './Components/Testimonials';
import Portfolio from './Components/Portfolio';
import { Store } from './Store';

function App() {
  const { state } = useContext(Store);

  return (
    <div className="App">
      <Header data={state[0].main} />
      <About data={state[0].main} />
      <Resume data={state[0].resume} />
      <Portfolio data={state[0].portfolio} />
      <Testimonials data={state[0].testimonials} />
      <Contact data={state[0].main} />
      <Footer data={state[0].main} />
    </div>
  );
}

export default App;
