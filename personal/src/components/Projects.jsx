import React from 'react';
import { projectsData } from '../projectsData';
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"> 
        {projectsData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
