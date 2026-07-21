import { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Tools from './components/Tools';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FAB from './components/FAB';
import Loader from './components/Loader';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [showNavText, setShowNavText] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Responsive default state on mount & resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsSidebarOpen(false);
      } else {
        setIsSidebarOpen(true);
      }
    };
    
    // Initial check
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Show/hide nav text on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setShowNavText(false);
      } else {
        setShowNavText(true);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const toggleSidebar = () => {
    if (isSidebarOpen) {
      setShowNavText(true);
    }
    setIsSidebarOpen(prev => !prev);
  };

  const handleLoaderFinished = () => {
    setIsLoading(false);
    // Use refreshHard to wipe prior animation state — ensures every data-aos element
    // animates fresh now that the loader curtain has lifted.
    setTimeout(() => {
      AOS.init({
        duration: 800,
        once: true,
        easing: 'ease-out-cubic',
      });
      AOS.refreshHard();
    }, 100);
  };

  return (
    <>
      {isLoading && <Loader onFinished={handleLoaderFinished} />}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <TopBar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} showNavText={showNavText} />
      <div className={`transition-all duration-300 ease-in-out ${
        isSidebarOpen ? 'md:ml-[240px] ml-0' : 'ml-0'
      }`}>
        <main className="mt-16 p-6 min-h-screen">
          <Hero />
          <Experience />
          <Tools />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
      <FAB />
    </>
  )
}
