import React, { useState } from 'react';
import Navbar from './Components/Navbarr';
import MainComponent from './Components/MainComponent';
import About from './Components/About';
function App() {
  return (
    <>
      <MainComponent />
      <Navbar />
      <About/>
    </>
  );
}

export default App;
