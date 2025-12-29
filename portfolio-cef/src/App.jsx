import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css'

import Header from './components/layout/Header';

import Home from './pages/Home';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import LegalNotice from './pages/LegalNotice';


import Footer from './components/layout/Footer';

export default function App() {
  return (
    <Router>
      <Header />

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/mentions-legales" element={<LegalNotice />} />

        </Routes>
      </main>
      <Footer />
    </Router>
  );
}