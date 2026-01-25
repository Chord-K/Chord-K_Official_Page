
import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import ReleasesList from './components/ReleasesList';
import UpcomingPage from './components/UpcomingPage';
import LabelPage from './components/LabelPage';
import DemoSubmission from './components/DemoSubmission';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-[#050505] text-white flex flex-col selection:bg-white selection:text-black">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/releases" element={<ReleasesList />} />
            <Route path="/upcoming" element={<UpcomingPage />} />
            <Route path="/label" element={<LabelPage />} />
            <Route path="/demo" element={<DemoSubmission />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
