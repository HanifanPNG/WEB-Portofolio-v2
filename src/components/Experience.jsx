import { useState } from 'react';
import roboticCert from '../assets/robotic_certificate.png';
import hackathonCert from '../assets/hackathon_certificate.png';

const certificatesData = [
  {
    title: '2nd Place in Robotic Innovation',
    issuer: 'Pesoma UIN SAIZU',
    year: '2025',
    image: roboticCert
  },
  {
    title: 'Invest 2025 Hackathon Participants',
    issuer: 'Informatika Innovation',
    year: '2025',
    image: hackathonCert
  }
];

const experienceData = [
  {
    icon: 'school',
    title: 'UIN Saizu Informatics Student Association',
    period: '2025 - 2026',
    role: 'Student Resource Development Department Staff',
    desc: 'Responsible for developing information technology resources in the academic field and fostering student growth within the association.'
  },
  {
    icon: 'event',
    title: 'Webinar Career IT',
    period: 'April 2025',
    role: 'Event Chairperson',
    desc: 'Lead, coordinate, and take full responsibility for the entire series of events, ensuring successful delivery of career insights.'
  },
  {
    icon: 'groups',
    title: 'Collaboration Day Event',
    period: 'August 2025',
    role: 'Event Division Coordinator',
    desc: 'Plan, organize, and oversee all event details from start to finish, ensuring that the event runs smoothly and stays within budget.'
  },
  {
    icon: 'volunteer_activism',
    title: 'Student Executive Board of the Faculty of Science and Technology, State Islamic University of Saifuddin Zuhri',
    period: '2026 - 2027',
    role: 'Department of Social and Community Affairs',
    desc: 'Organizing real and sustainable community service programs.'
  }
];

const INITIAL_SHOW = 3;

export default function Experience() {
  const [activeCert, setActiveCert] = useState(null);
  const [showAllExp, setShowAllExp] = useState(false);

  const visibleExp = showAllExp ? experienceData : experienceData.slice(0, INITIAL_SHOW);
  const hiddenCount = experienceData.length - INITIAL_SHOW;

  const iconBg = (index) => index % 2 === 0 ? 'bg-primary-container' : 'bg-tertiary-container';

  return (
    <section className="grid grid-cols-12 gap-6 mb-6 overflow-hidden">
      {/* EXPERIENCE LIST */}
      <div 
        className="col-span-12 lg:col-span-7"
        data-aos="fade-right"
        data-aos-duration="800"
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-4xl font-black uppercase" id="experience">Experience</h2>
          <span className="material-symbols-outlined text-4xl animate-pulse">work_history</span>
        </div>
        
        <div className="space-y-4">
          {visibleExp.map((exp, index) => (
            <div
              key={index}
              data-aos="fade-right"
              data-aos-delay={200 + index * 150}
              className="bg-white border-2 border-black p-6 hard-shadow flex items-start gap-6 group hover:translate-x-2 transition-transform duration-300 ease-in-out"
            >
              <div className={`w-12 h-12 ${iconBg(index)} border-2 border-black flex items-center justify-center shrink-0 group-hover:rotate-6 transition-transform`}>
                <span className="material-symbols-outlined">{exp.icon}</span>
              </div>
              <div className="min-w-0">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <h4 className="font-black text-base sm:text-lg uppercase leading-tight group-hover:text-primary transition-colors">{exp.title}</h4>
                  <span className="text-[14px] font-bold bg-secondary-container px-2 border-2 border-black whitespace-nowrap">{exp.period}</span>
                </div>
                <p className="text-[14px] font-bold text-primary mb-2">{exp.role}</p>
                <p className="text-[16px] opacity-80">{exp.desc}</p>
              </div>
            </div>
          ))}

          {!showAllExp && hiddenCount > 0 && (
            <button
              onClick={() => setShowAllExp(true)}
              data-aos="fade-up"
              data-aos-delay={200 + INITIAL_SHOW * 150}
              className="w-full bg-white border-2 border-black p-4 hard-shadow font-black text-sm uppercase hover:translate-x-1 transition-transform duration-300 cursor-pointer"
            >
              Lihat pengalaman lainnya (+{hiddenCount})
            </button>
          )}
          {showAllExp && hiddenCount > 0 && (
            <button
              onClick={() => setShowAllExp(false)}
              className="w-full bg-white border-2 border-black p-4 hard-shadow font-black text-sm uppercase hover:-translate-x-1 transition-transform duration-300 cursor-pointer"
            >
              Tampilkan lebih sedikit
            </button>
          )}
        </div>
      </div>

      {/* CERTIFICATES SECTION */}
      <div 
        className="col-span-12 lg:col-span-5" id="certificates"
        data-aos="fade-left" // Blok sertifikat bergeser halus dari kanan
        data-aos-duration="800"
        data-aos-delay="100"
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-4xl font-black uppercase">Certificates</h2>
          <span className="material-symbols-outlined text-4xl">workspace_premium</span>
        </div>
        <div className="bg-white border-2 border-black hard-shadow p-6 h-[calc(100%-4rem)] flex flex-col justify-between">
          <div className="space-y-4">
            {certificatesData.map((cert, index) => (
              <div 
                key={index} 
                onClick={() => setActiveCert(cert)}
                data-aos="zoom-in-up" // Efek sertifikat memantul kecil dari bawah ke atas
                data-aos-delay={300 + index * 150}
                className="bg-white border-2 border-black p-3 hover:translate-x-1 hover:translate-y-0.5 hover:shadow-none transition-all duration-300 ease-in-out cursor-pointer flex gap-4 items-center group"
                style={{ boxShadow: '4px 4px 0px 0px #000' }}
              >
                <div className="w-20 h-14 bg-surface-container-high border border-black shrink-0 overflow-hidden relative">
                  <img 
                    src={cert.image} 
                    alt={cert.title} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-300"
                  />
                  <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="material-symbols-outlined text-white text-lg">visibility</span>
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h5 className="font-black text-sm uppercase leading-tight truncate group-hover:text-primary transition-colors">
                    {cert.title}
                  </h5>
                  <p className="text-[12px] text-on-surface-variant font-bold mt-1">
                    {cert.issuer} · {cert.year}
                  </p>
                </div>
                <span className="material-symbols-outlined text-neutral-400 group-hover:text-black group-hover:translate-x-0.5 transition-all shrink-0">
                  open_in_new
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* MODAL FOR CERTIFICATES WITH ZOOM ANIMATION */}
      {activeCert && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-xs p-4"
          onClick={() => setActiveCert(null)}
        >
          <div 
            data-aos="zoom-in" // Menambahkan animasi pop-up instan pada modal saat terbuka
            data-aos-duration="300"
            className="bg-white border-4 border-black p-6 hard-shadow max-w-3xl w-full relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setActiveCert(null)}
              className="absolute -top-4 -right-4 w-10 h-10 bg-secondary-container border-2 border-black flex items-center justify-center font-black text-xl hover:bg-secondary-fixed transition-colors cursor-pointer"
              style={{ boxShadow: '3px 3px 0px 0px #000' }}
            >
              ×
            </button>
            <div className="border-2 border-black overflow-hidden mb-4 bg-black">
              <img 
                src={activeCert.image} 
                alt={activeCert.title} 
                className="w-full max-h-[60vh] object-contain mx-auto" 
              />
            </div>
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <span className="text-[10px] font-bold bg-primary-container px-2 py-0.5 border-2 border-black uppercase mb-2 inline-block">
                  Verified Certificate
                </span>
                <h3 className="font-black text-2xl uppercase leading-tight mb-1">{activeCert.title}</h3>
                <p className="font-bold text-[14px] text-on-surface-variant">{activeCert.issuer} · {activeCert.year}</p>
              </div>
              <button 
                onClick={() => setActiveCert(null)}
                className="px-6 py-2.5 bg-black text-white font-black border-2 border-black text-sm uppercase hover:bg-neutral-800 transition-colors shrink-0 cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}