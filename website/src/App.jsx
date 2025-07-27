// src/App.jsx
import React from 'react';
import Header from './components/Header'; // adjust the path if needed

function App() {
  return (
    <div className="App">
      <Header />

      {/* Your other sections/components can go here */}
      <main className="p-4">
        <h2 className="text-2xl font-semibold">Main Content Goes Here</h2>
        {/* Example content */}
        <p className="mt-2">You can add your About, Products, Contact pages here.</p>
      </main>
    </div>
  );
}

export default App;
