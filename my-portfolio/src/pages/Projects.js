import React from 'react';
import {Card} from '../components';
import src from '../assets/img/project-1.jpg';

function Projects() {
  return (
    <div>
      <h2 className="projects__title">Мои работы</h2>
      <div className="card-list">
          <Card link={'#'} src={src}/>
          <Card link={'#'} src={src}/>
          <Card link={'#'} src={src}/>
          <Card link={'#'} src={src}/>
          <Card link={'#'} src={src}/>
          <Card link={'#'} src={src}/>
      </div>
    </div>
  );
}

export default Projects;
