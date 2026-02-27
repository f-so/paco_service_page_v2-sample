import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import Speed from './components/Speed';
import NotificationExample from './components/NotificationExample';
import SupportedSites from './components/SupportedSites';
import Pricing from './components/Pricing';
import WhyPaco from './components/WhyPaco';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Contact from './components/Contact';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header isScrolled={isScrolled} />
      <Hero />
      <Problem />
      <Solution />
      <Speed />
      <NotificationExample />
      <SupportedSites />
      <Pricing />
      <WhyPaco />
      <FAQ />
      <Contact />
      <FinalCTA />
      <Footer />
    </div>
  );
}
