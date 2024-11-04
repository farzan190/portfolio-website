import data from './data.js'
import { useState } from 'react';

const Projects=({picture,title,description,livelink,sourcecodelink})=>{
   
    return <div className='project'>
      <div>{console.log(picture)}</div>
      <div className='project-image'> <img src={picture} className='project-picture'/></div>
     <div className='content'>
      <div className='title'>{title}</div>
      <div>{description}</div>
     <div className='links'> <a href={livelink} target="_blank">Live</a>
      <a href={sourcecodelink} target="_blank">SourceCode</a>
      </div>
      </div> 

    </div>
}

export default Projects;