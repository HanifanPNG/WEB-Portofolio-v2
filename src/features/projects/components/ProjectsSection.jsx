import { useState } from 'react';
import projectsData from '../data/projectsData';
import ProjectCard from './ProjectCard';

const INITIAL_SHOW = 4;

export default function ProjectsSection({ onShowAll }) {
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
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              variant="grid"
              clampDescription
            />
          ))}
        </div>
      ) : (
        <div className="space-y-4">
          {visibleProjects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              variant="list"
            />
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
