import React from 'react';
import styles from '../styles/ProjectsSection.module.css';

const projectsData = [
    {
      image: '/images/dairy.png',
      title: 'Omkar Dairy',
      description: 'HTML CSS',
    },
    {
      image: '/images/jaihind.png',
      title: 'Jaihind Travels',
      description: 'HTML CSS',
    },
    {
      image: '/images/remergia.png',
      title: 'Remergia',
      description: 'HTML CSS',
    },
    {
        image: '/images/bvduimk.png',
        title: 'BVDUIMK',
        description: 'HTML CSS',
      }
  ];
  
  const ProjectsSection = () => {
    return (
      <section id='Projects' className={styles.projects}>
        <h2>Projects</h2>
        <div className={styles.projectGrid}>
          {projectsData.map((project, index) => (
            <div className={styles.projectItem} key={index}>
              <img src={project.image} alt={project.title} />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default ProjectsSection;