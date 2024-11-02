import './App.css';
import picture from "./assets/1582274123139.jpg";

function App() {
  return (<div className="main-page">
    <div className="header">
      <div className='home'>Home</div>
      <div>Projects</div> 
      <div>About</div> 
          </div>
   <div className="main">
    <div className="left"><img src={picture} className="picture"/></div>
    
    <div className="right">
  <div className="name">Farzan Khan</div>
  <div className="profession">Frontend Engineer @DXC</div>
  <p>Building with ReactJS, TypeScript and CSS</p>
  </div>
  
   </div>




          </div>
  );
}

export default App;
