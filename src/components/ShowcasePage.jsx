import { useState, useEffect } from 'react';
import projectsData from '../data/projectsData';
import AOS from 'aos';

export default function ShowcasePage({ onBack }) {
  const [viewMode, setViewMode] = useState('grid');

  useEffect(() => {
    AOS.refresh();
  }, []);

  return (
    <div className="min-h-screen bg-surface">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-surface border-b-2 border-black header-shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <button
            onClick={onBack}
            className="flex items-center gap-2 font-black uppercase text-sm hover:translate-x-1 transition-transform cursor-pointer"
          >
            <span className="material-symbols-outlined">arrow_back</span>
            Back
          </button>

          <div className="flex items-center gap-3">
            <h1 className="font-black text-2xl uppercase">Showcase</h1>
            <div className="flex gap-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`border-2 border-black p-1.5 transition-colors flex items-center justify-center cursor-pointer ${
                  viewMode === 'grid' ? 'bg-secondary-container' : 'bg-white hover:bg-secondary-container/50'
                }`}
              >
                <span className="material-symbols-outlined text-lg">grid_view</span>
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`border-2 border-black p-1.5 transition-colors flex items-center justify-center cursor-pointer ${
                  viewMode === 'list' ? 'bg-secondary-container' : 'bg-white hover:bg-secondary-container/50'
                }`}
              >
                <span className="material-symbols-outlined text-lg">list</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <p className="text-[16px] opacity-70 mb-8 font-bold">
          All projects ({projectsData.length})
        </p>

        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectsData.map((project, index) => (
              <div
                key={project.title}
                data-aos="fade-up"
                data-aos-delay={(index % 3) * 100}
                className="bg-white border-2 border-black hard-shadow overflow-hidden group hover:-translate-y-1 transition-all duration-300 ease-in-out"
              >
                <div className="h-48 overflow-hidden border-b-2 border-black relative">
                  <img
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500 ease-in-out"
                    src={project.image}
                    alt={project.title}
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-black text-xl uppercase group-hover:text-primary transition-colors">{project.title}</h3>
                    <span className={`${project.tagBg} text-[10px] font-bold px-2 border-2 border-black`}>
                      {project.tag}
                    </span>
                  </div>
                  <p className="text-[14px] leading-5 mb-6 opacity-80 min-h-[40px]">
                    {project.description}
                  </p>
                  <div className="flex gap-4">
                    <a className="flex-1 text-center py-2 bg-black text-white font-bold border-2 border-black text-sm uppercase hover:bg-neutral-800 transition-colors cursor-pointer" href={project.sourceUrl}>Source</a>
                    <a className="flex-1 text-center py-2 bg-white text-black font-bold border-2 border-black text-sm uppercase hover:bg-neutral-100 transition-colors cursor-pointer" href={project.liveUrl}>Live</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {projectsData.map((project, index) => (
              <div
                key={project.title}
                data-aos="fade-right"
                data-aos-delay={index * 100}
                className="bg-white border-2 border-black hard-shadow p-6 flex flex-col md:flex-row items-center gap-6 group hover:translate-x-1 transition-all duration-300 ease-in-out"
              >
                <div className="w-full md:w-48 h-32 overflow-hidden border-2 border-black shrink-0">
                  <img
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500 ease-in-out"
                    src={project.image}
                    alt={project.title}
                  />
                </div>
                <div className="flex-1 w-full">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-black text-xl uppercase group-hover:text-primary transition-colors">{project.title}</h3>
                    <span className={`${project.tagBg} text-[10px] font-bold px-2 border-2 border-black`}>
                      {project.tag}
                    </span>
                  </div>
                  <p className="text-[14px] leading-5 opacity-80 mb-4">{project.description}</p>
                  <div className="flex gap-4 max-w-xs">
                    <a className="flex-1 text-center py-1.5 bg-black text-white font-bold border-2 border-black text-xs uppercase hover:bg-neutral-800 transition-colors cursor-pointer" href={project.sourceUrl}>Source</a>
                    <a className="flex-1 text-center py-1.5 bg-white text-black font-bold border-2 border-black text-xs uppercase hover:bg-neutral-100 transition-colors cursor-pointer" href={project.liveUrl}>Live</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
