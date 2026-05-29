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

export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

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

  const toggleSidebar = () => {
    setIsSidebarOpen(prev => !prev);
  };

  return (
    <>
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <TopBar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
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
