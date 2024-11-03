import { useState } from 'react';
import './App.css';
import github from "./assets/github-mark.png";
import linkedin from "./assets/linkedin.png";
import x from "./assets/twitter.png";
import Homeies from './mainpage';


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
      <div onClick={()=>handleProjects()}>Projects</div> 
      <div onClick={()=>handleAbout()}>About</div> 
    </div>
     <div>{ home && <div>{<Homeies/>}</div>}  {projects && <div onClick={handleProjects}>i am projects</div>}  {about && <div onClick={handleAbout}>i am about</div>}  </div>
   

   </div>
  );
}

export default App;
