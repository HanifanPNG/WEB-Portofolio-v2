import React from 'react';

export default function Hero() {
  return (
    <section className="grid grid-cols-12 gap-6 mb-6 overflow-hidden" id="overview">
      
      {/* YELLOW HERO CARD */}
      <div 
        // AOS: Main card appears smoothly from below with the right duration
        data-aos="fade-up"
        data-aos-duration="1000"
        className="col-span-12 lg:col-span-8 bg-secondary-container border-2 border-black hard-shadow p-8 flex flex-col md:flex-row items-center gap-8 overflow-hidden relative"
      >
        <div className="flex-1 z-10">
          <span 
            data-aos="fade-right"
            data-aos-delay="300"
            className="bg-black text-white px-3 py-1 text-[14px] font-bold inline-block mb-4"
          >
            FRONTEND DEVELOPER
          </span>
          <h2 
            data-aos="fade-right"
            data-aos-delay="400"
            className="text-[48px] font-black leading-tight text-on-surface mb-4"
          >
            Hanifan Pangabekti
          </h2>
          <p 
            data-aos="fade-right"
            data-aos-delay="500"
            className="text-[16px] leading-6 mb-8 max-w-lg"
          >
            A Frontend Developer with a strong interest in UI/UX Design. Passionate about building functional and comfortable user experiences through clean code and modern aesthetics.
          </p>
          <div 
            className="flex gap-4"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <button className="bg-black text-white px-6 py-3 font-bold border-2 border-black hard-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-100">
              DOWNLOAD CV
            </button>
            <button className="bg-white text-black px-6 py-3 font-bold border-2 border-black hard-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-100">
              MY PROJECT
            </button>
          </div>
        </div>

        {/* PROFILE IMAGE AREA */}
        <div 
          className="relative w-full md:w-1/3 flex justify-center"
          data-aos="zoom-in-left" // Using zoom + direction combination for dynamic entrance
          data-aos-delay="500"
        >
          <img
            alt="Hanifan Pangabekti"
            className="w-full max-w-[300px] z-10 border-2 border-black bg-white transition-all duration-300 md:grayscale md:contrast-125 hover:grayscale-0 hover:contrast-100 hover:rotate-2"
            src="/images/profile.jpg"
          ></img>
          <div className="absolute inset-0 bg-primary-container/20 -z-0 rotate-3 border-2 border-black"></div>
        </div>
      </div>

      {/* SOCIAL MEDIA PINK CARD */}
      <div 
        // AOS: Social media card enters from the right
        data-aos="fade-left"
        data-aos-duration="1000"
        data-aos-delay="200"
        className="col-span-12 lg:col-span-4 bg-tertiary-container border-2 border-black hard-shadow p-6 flex flex-col justify-between"
      >
        <div>
          <h3 className="text-2xl font-black mb-6">MY SOCIAL MEDIA</h3>
          <div className="grid grid-cols-2 gap-4">
            
            {/* Instagram */}
            <a 
              href="https://instagram.com/hnifn.png" 
              target="_blank" 
              rel="noopener noreferrer"
              data-aos="zoom-in"
              data-aos-delay="500" // Displayed sequentially (staggered)
              className="border-2 border-black p-4 bg-white hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-none transition-all duration-100 flex flex-col justify-between group cursor-pointer"
              style={{ boxShadow: '3px 3px 0px 0px #000' }}
            >
              <div className="flex items-center justify-between mb-2">
                <img 
                  src="https://cdn.jsdelivr.net/npm/simple-icons@11.15.0/icons/instagram.svg" 
                  alt="Instagram" 
                  className="w-7 h-7 object-contain"
                />
                <span className="material-symbols-outlined opacity-0 group-hover:opacity-100 transition-opacity text-sm font-black text-black">
                  north_east
                </span>
              </div>
              <div>
                <p className="text-[10px] font-black opacity-55 uppercase leading-none">Instagram</p>
                <p className="text-[13px] font-black leading-tight mt-1 group-hover:text-primary transition-colors">@hnifn.png</p>
              </div>
            </a>

            {/* TikTok */}
            <a 
              href="https://tiktok.com/@haniiffan.png" 
              target="_blank" 
              rel="noopener noreferrer"
              data-aos="zoom-in"
              data-aos-delay="600" // Displayed after Instagram (+100ms)
              className="border-2 border-black p-4 bg-white hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-none transition-all duration-100 flex flex-col justify-between group cursor-pointer"
              style={{ boxShadow: '3px 3px 0px 0px #000' }}
            >
              <div className="flex items-center justify-between mb-2">
                <img 
                  src="https://cdn.jsdelivr.net/npm/simple-icons@11.15.0/icons/tiktok.svg" 
                  alt="TikTok" 
                  className="w-7 h-7 object-contain"
                />
                <span className="material-symbols-outlined opacity-0 group-hover:opacity-100 transition-opacity text-sm font-black text-black">
                  north_east
                </span>
              </div>
              <div>
                <p className="text-[10px] font-black opacity-55 uppercase leading-none">TikTok</p>
                <p className="text-[13px] font-black leading-tight mt-1 group-hover:text-primary transition-colors">haniiffan.png</p>
              </div>
            </a>

            {/* GitHub */}
            <a 
              href="https://github.com/Hanifan-pangabekti" 
              target="_blank" 
              rel="noopener noreferrer"
              data-aos="zoom-in"
              data-aos-delay="700" // Displayed after TikTok (+100ms)
              className="border-2 border-black p-4 bg-white hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-none transition-all duration-100 flex flex-col justify-between group cursor-pointer"
              style={{ boxShadow: '3px 3px 0px 0px #000' }}
            >
              <div className="flex items-center justify-between mb-2">
                <img 
                  src="https://cdn.jsdelivr.net/npm/simple-icons@11.15.0/icons/github.svg" 
                  alt="GitHub" 
                  className="w-7 h-7 object-contain"
                />
                <span className="material-symbols-outlined opacity-0 group-hover:opacity-100 transition-opacity text-sm font-black text-black">
                  north_east
                </span>
              </div>
              <div>
                <p className="text-[10px] font-black opacity-55 uppercase leading-none">GitHub</p>
                <p className="text-[13px] font-black leading-tight mt-1 group-hover:text-primary transition-colors">Hanifan pangabekti</p>
              </div>
            </a>

            {/* LinkedIn */}
            <a 
              href="https://linkedin.com/in/Hanifan-pangabekti" 
              target="_blank" 
              rel="noopener noreferrer"
              data-aos="zoom-in"
              data-aos-delay="800" // Displayed after GitHub (+100ms)
              className="border-2 border-black p-4 bg-white hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-none transition-all duration-100 flex flex-col justify-between group cursor-pointer"
              style={{ boxShadow: '3px 3px 0px 0px #000' }}
            >
              <div className="flex items-center justify-between mb-2">
                <img 
                  src="https://cdn.jsdelivr.net/npm/simple-icons@11.15.0/icons/linkedin.svg" 
                  alt="LinkedIn" 
                  className="w-7 h-7 object-contain"
                />
                <span className="material-symbols-outlined opacity-0 group-hover:opacity-100 transition-opacity text-sm font-black text-black">
                  north_east
                </span>
              </div>
              <div>
                <p className="text-[10px] font-black opacity-55 uppercase leading-none">LinkedIn</p>
                <p className="text-[13px] font-black leading-tight mt-1 group-hover:text-primary transition-colors">Hanifan pangabekti</p>
              </div>
            </a>

          </div>
        </div>
      </div>
    </section>
  );
}