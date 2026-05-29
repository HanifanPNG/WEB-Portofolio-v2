import React, { useState, useEffect } from 'react';

export default function TopBar({ isOpen, toggleSidebar }) {
  const [showText, setShowText] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Jika scroll ke bawah dan posisi sudah melewati 50px, sembunyikan tulisan
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setShowText(false);
      } else {
        // Jika scroll ke atas, munculkan kembali tulisan
        setShowText(true);
      }

      // Simpan posisi scroll terakhir
      setLastScrollY(currentScrollY);
    };

    // Pasang event listener scroll
    window.addEventListener('scroll', handleScroll);

    // Bersihkan event listener saat komponen tidak dimuat lagi
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 right-0 h-16 bg-surface flex items-center justify-between px-6 border-b-2 border-black header-shadow z-40 transition-all duration-300 ease-in-out ${
        isOpen ? 'md:left-[240px] left-0' : 'left-0'
      }`}
      data-aos="fade-down"
    >
      {/* Left side: navigation / Title */}
      <div className="flex items-center gap-4 h-full">
        {/* Sidebar Toggle Button */}
        <button
          onClick={toggleSidebar}
          className="bg-secondary-container border-2 border-black w-10 h-10 flex items-center justify-center hover:scale-105 active:scale-95 transition-all cursor-pointer"
          aria-label="Toggle Sidebar"
        >
          <span className="material-symbols-outlined text-black font-black select-none">
            {isOpen ? 'menu_open' : 'menu'}
          </span>
        </button>

        <div className="overflow-hidden h-full flex items-center">
          <span 
            className={`font-black text-on-surface text-4xl uppercase transition-all duration-300 ease-in-out ${
              showText 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 -translate-y-2 pointer-events-none'
            }`}
          >
            HOME
          </span>
        </div>
      </div>

      {/* Right side: profile picture and name */}
      <div className="flex items-center gap-3">
        <img
          src="/images/profile.jpg"
          alt="Hanifan Pangabekti"
          className="w-10 h-10 rounded-full border-2 border-black object-cover hover:scale-105 transition-transform duration-200"
        />
        <span className="font-black text-lg text-on-surface">Hanifan Pangabekti</span>
      </div>
    </header>
  );
}