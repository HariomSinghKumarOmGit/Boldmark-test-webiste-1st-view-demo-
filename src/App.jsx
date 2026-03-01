/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Navbar from './components/Navbar';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';
import HeroSection from './components/HeroSectin';
import Projects from './Projects';

export default function App() {
  return (
    <div className="bg-black min-h-screen font-sans text-white">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <Projects/>
      <Footer />
    </div>
  );
}
