import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Features from './components/Features.jsx';
import HowItWorks from './components/HowItWorks.jsx';
import Footer from './components/Footer.jsx';
import ContactForm from './components/ContactForm.jsx';
import * as Sentry from '@sentry/react';
const Home = () => (
  <main className="bg-black">
    <Navbar />
    <Hero />
    <Features />
    <HowItWorks />
    <Footer />
  </main>
);
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/send" element={<ContactForm />} />
      </Routes>
    </Router>
  );
};
export default Sentry.withProfiler(App);