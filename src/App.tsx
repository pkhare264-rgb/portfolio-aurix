/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Services from './components/sections/Services';
import Work from './components/sections/Work';
import Reviews from './components/sections/Reviews';
import Process from './components/sections/Process';
import FAQ from './components/sections/FAQ';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';
import PastWork from './pages/PastWork';

function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Services />
        <Work />
        <Reviews />
        <Process />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="bg-obsidian min-h-screen text-ivory selection:bg-champagne selection:text-obsidian flex flex-col font-sans">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/past-work" element={<PastWork />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
