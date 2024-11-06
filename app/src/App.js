import { useState } from 'react';
import './App.css';

import Homeies from './mainpage';
import Projects from './projects';
import About from './about';
import data from './data.js'

function App() {
  const [home,setHome]=useState(true);
  const [projects,setProjects]=useState(false);
  const [about,setAbout]=useState(false);

  const handleProjects=()=>{
    setHome(false);
    setProjects(true);
    setAbout(false);
  }
const handleAbout=()=>{
  setHome(false);
  setProjects(false);
  setAbout(true);
}
const handleHome=()=>{
  setHome(true);
  setProjects(false);
  setAbout(false);
}
  return (
  <div className="main-page">
    <div className="header">
      <div className='home' onClick={()=>handleHome()}>Home</div>
      <div className='project-header' onClick={()=>handleProjects()}>Projects</div> 
      <div className='about-header' onClick={()=>handleAbout()}>About</div> 
      
    </div>
     <div>{ home && <div>{<Homeies/>}</div>}  {projects && <div className='All-projects' >{    data.map((item)=><Projects picture={item.picture} title={item.title} description={item.description} livelink={item.liveLink} sourcecodelink={item.githubLink}/>)}</div>}  {about && <div><About/></div>}  </div>
   

   </div>
  );
}

export default App;
