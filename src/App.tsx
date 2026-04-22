/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import PracticeAreas from './components/PracticeAreas';
import Team from './components/Team';
import Footer from './components/Footer';

export default function App() {
  return (
    <main className="min-h-screen selection:bg-gold selection:text-midnight">
      <Navbar />
      <Hero />
      <About />
      <PracticeAreas />
      <Team />
      <Footer />
    </main>
  );
}
