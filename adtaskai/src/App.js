import React from 'react';
import { Navbar } from './components/Navbar';
import { Pricing } from './components/Pricing';

function App() {
  return (
    <div className="min-h-screen px-52 py-10 bg-[#050506]">
      <Navbar></Navbar>
      <Pricing></Pricing>
    </div>
  );
}

export default App;
