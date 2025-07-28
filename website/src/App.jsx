// src/App.jsx
import React from 'react';
import Header from './components/Header'; // adjust path if needed
import Carousel from './components/Carousel'; // import Carousel
import LandingPage from './components/LandingPage';

function App() {
  return (
    <div className="App">
      <Header />
      <Carousel /> {/* Add the Carousel here */}
      <LandingPage />

    
    </div>
  );
}

export default App;
