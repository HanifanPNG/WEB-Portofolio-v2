import { useState } from 'react';
import projectsData from '../data/projectsData';

const INITIAL_SHOW = 4;

export default function Projects({ onShowAll }) {
  const [viewMode, setViewMode] = useState('grid');
  const visibleProjects = projectsData.slice(0, INITIAL_SHOW);
  const hiddenCount = projectsData.length - INITIAL_SHOW;

  return (
    <section className="mb-6 overflow-hidden" id="projects">
      {/* HEADER SECTION */}
      <div 
        className="flex items-center justify-between mb-8"
        data-aos="fade-down"
        data-aos-duration="600"
      >
        <div>
          <h2 className="text-4xl font-black uppercase">Showcase</h2>
          <p className="text-[16px] opacity-70">A selection of featured projects and developments.</p>
        </div>
        <div className="flex gap-2">
          <button 
            onClick={() => setViewMode('grid')}
            className={`border-2 border-black p-2 transition-colors flex items-center justify-center cursor-pointer ${
              viewMode === 'grid' ? 'bg-secondary-container' : 'bg-white hover:bg-secondary-container/50'
            }`}
          >
            <span className="material-symbols-outlined">grid_view</span>
          </button>
          <button 
            onClick={() => setViewMode('list')}
            className={`border-2 border-black p-2 transition-colors flex items-center justify-center cursor-pointer ${
              viewMode === 'list' ? 'bg-secondary-container' : 'bg-white hover:bg-secondary-container/50'
            }`}
          >
            <span className="material-symbols-outlined">list</span>
          </button>
        </div>
      </div>

      {/* PROJECTS DISPLAY CONTAINER */}
      {viewMode === 'grid' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleProjects.map((project, index) => (
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
                <p className="text-[14px] leading-5 mb-6 line-clamp-2 opacity-80 min-h-[40px]">
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
          {visibleProjects.map((project, index) => (
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

      {hiddenCount > 0 && (
        <button
          onClick={onShowAll}
          data-aos="fade-up"
          data-aos-delay={(INITIAL_SHOW % 3) * 100 + 100}
          className="w-full mt-6 bg-white border-2 border-black p-4 hard-shadow font-black text-sm uppercase hover:translate-x-1 transition-transform duration-300 cursor-pointer"
        >
          View all projects (+{hiddenCount})
        </button>
      )}
    </section>
  );
}