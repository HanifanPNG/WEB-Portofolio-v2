import React from 'react';
import socialLinks from '../data/socialLinks';
import { TypingAnimation } from './TypingAnimation';

export default function Hero() {
  return (
    <section className="grid grid-cols-12 gap-6 mb-6 overflow-hidden" id="overview">

      {/* YELLOW HERO CARD */}
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="col-span-12 lg:col-span-8 bg-secondary-container border-2 border-black hard-shadow p-5 flex flex-col md:flex-row items-center gap-8 overflow-hidden relative"
      >
        <div className="flex-1 z-10">
          <TypingAnimation
            className="inline-block font-semibold mb-4 text-[20px]"
            words={["Informatics Student", "Frontend Developer"]}
            loop
            typeSpeed={80}
            deleteSpeed={40}
            pauseDelay={1500}
            cursorStyle="line"
            blinkCursor={true}
            as="span"
          >
          </TypingAnimation>
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
            <a
              href="/cv-hanifan-pangabekti.pdf"
              download="CV_Hanifan_Pangabekti.pdf"
              className="bg-black text-white px-6 py-3 font-bold border-2 border-black hard-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-100 cursor-pointer"
            >
              DOWNLOAD CV
            </a>
            <a
              href="#projects"
              className="bg-white text-black px-6 py-3 font-bold border-2 border-black hard-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-100 cursor-pointer"
            >
              MY PROJECT
            </a>
          </div>
        </div>

        {/* PROFILE IMAGE AREA */}
        <div
          className="relative w-full md:w-1/3 flex justify-center"
          data-aos="zoom-in-left"
          data-aos-delay="500"
        >
          <img
            alt="Hanifan Pangabekti"
            className="w-full max-w-[350px] z-10 border-2 border-black bg-white transition-all duration-300 md:grayscale md:contrast-125 hover:grayscale-0 hover:contrast-100 hover:rotate-2"
            src="/images/profile1.jpg"
          ></img>
          <div className="absolute inset-0 bg-primary-container/20 -z-0 rotate-3 border-2 border-black"></div>
        </div>
      </div>

      {/* SOCIAL MEDIA PINK CARD */}
      <div
        data-aos="fade-left"
        data-aos-duration="1000"
        data-aos-delay="200"
        className="col-span-12 lg:col-span-4 bg-tertiary-container border-2 border-black hard-shadow p-6 flex flex-col justify-between"
      >
        <div>
          <h3 className="text-2xl font-black mb-6">MY SOCIAL MEDIA</h3>
          <div className="grid grid-cols-2 gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                data-aos="zoom-in"
                data-aos-delay={social.delay}
                className="border-2 border-black p-4 bg-white hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-none transition-all duration-100 flex flex-col justify-between group cursor-pointer"
                style={{ boxShadow: '3px 3px 0px 0px #000' }}
              >
                <div className="flex items-center justify-between mb-2">
                  <img
                    src={social.icon}
                    alt={social.name}
                    className="w-7 h-7 object-contain"
                  />
                  <span className="material-symbols-outlined opacity-0 group-hover:opacity-100 transition-opacity text-sm font-black text-black">
                    north_east
                  </span>
                </div>
                <div>
                  <p className="text-[10px] font-black opacity-55 uppercase leading-none">{social.name}</p>
                  <p className="text-[13px] font-black leading-tight mt-1 group-hover:text-primary transition-colors">{social.handle}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
