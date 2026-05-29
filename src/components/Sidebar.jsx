import { useState, useEffect } from 'react'

const navLinks = [
  { href: '#overview', icon: 'dashboard', label: 'Home' },
  { href: '#experience', icon: 'work', label: 'Experience & Certifications' },
  { href: '#projects', icon: 'bar_chart', label: 'Projects' },
  { href: '#contact', icon: 'settings', label: 'Contact' },
]

export default function Sidebar({ isOpen, toggleSidebar }) {
  const [activeLink, setActiveLink] = useState('#overview')


  const handleScroll = (e, href) => {
    e.preventDefault()
    setActiveLink(href)

    document.querySelector(href)?.scrollIntoView({
      behavior: 'smooth'
    })

    // Auto-close sidebar on mobile screens
    if (window.innerWidth < 768) {
      toggleSidebar()
    }
  }

  return (
    <>
      {/* Backdrop for mobile */}
      <div 
        className={`fixed inset-0 bg-black/40 z-45 transition-opacity duration-300 md:hidden ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={toggleSidebar}
      />

      <nav 
        className={`fixed left-0 top-0 h-screen w-[240px] bg-primary-container flex flex-col sidebar-shadow border-r-2 border-black z-50 transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Logo */}
        <div 
          className="p-6 flex items-center justify-between"
          data-aos="fade-down"
          data-aos-delay="200" // Muncul setelah sidebar utama bergeser
        >
          <div>
            <h1 className="text-2xl font-black text-on-surface leading-tight">HANIFAN PNG</h1>
            <p className="text-[14px] font-bold text-on-primary-container opacity-70">Informatics Student</p>
          </div>

          {/* Close button for mobile screens */}
          <button
            onClick={toggleSidebar}
            className="md:hidden bg-secondary-container border-2 border-black p-1.5 flex items-center justify-center hover:scale-105 active:scale-95 transition-all cursor-pointer"
            aria-label="Close Sidebar"
          >
            <span className="material-symbols-outlined text-black font-black text-xl select-none">
              close
            </span>
          </button>
        </div>

      {/* Nav Links */}
      <div className="flex-1 px-4 space-y-2 mt-4">
        {navLinks.map(({ href, icon, label }, index) => (
          <a
            key={label}
            href={href}
            onClick={(e) => handleScroll(e, href)}
            // AOS: Efek staggered (bergantian). Menu 1, 2, 3, 4 akan muncul berurutan.
            data-aos="fade-right"
            data-aos-delay={300 + index * 100} // Menu pertama delay 300ms, kedua 400ms, dst.
            className={`flex items-center gap-3 p-3 font-bold transition-all duration-300 ease-in-out border border-transparent ${
              activeLink === href
                ? 'bg-black text-white translate-x-2 border-black'
                : 'text-on-surface hover:bg-black/5 hover:translate-x-1'
            }`}
          >
            <span className="material-symbols-outlined">{icon}</span>
            <span className="text-[14px] leading-5 font-medium">{label}</span>
          </a>
        ))}
      </div>

      {/* User Info */}
      <div 
        className="p-6 border-t-2 border-black/10"
        data-aos="fade-up"
        data-aos-delay="700" // Muncul paling terakhir di bagian bawah
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 border-2 border-black bg-tertiary-container flex items-center justify-center font-bold text-sm transition-transform duration-300 hover:rotate-6">
            HP
          </div>
          <div>
            <p className="text-[14px] font-bold leading-4">Hanifan P.</p>
            <p className="text-[10px] uppercase font-bold text-on-surface-variant">FrontEnd Dev</p>
          </div>
        </div>
      </div>
    </nav>
    </>
  )
}