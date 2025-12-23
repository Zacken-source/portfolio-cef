import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'

import Home from './pages/Home';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import LegalNotice from './pages/LegalNotice';
import TestNav from './components/TestNav';

export default function App() {
  return (
    <Router>
      <header>
        <TestNav />
      </header>

      <main className="container py-5">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/mentions-legales" element={<LegalNotice />} />

        </Routes>
      </main>
    </Router>
  );
}