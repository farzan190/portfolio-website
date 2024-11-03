import picture from "./assets/1582274123139.jpg";
import github from "./assets/github-mark.png";
import linkedin from "./assets/linkedin.png";
import x from "./assets/twitter.png";

 const Home=()=>{
 
    return (<div className="main-logos">
   <div className="main">
    <div className="left"><img src={picture} className="picture"/></div>
    
    <div className="right">
  <div className="name">Farzan Khan</div>
  <div className="profession">Frontend Engineer @DXC</div>
  <p>Building with ReactJS, TypeScript and CSS</p>
  </div>
  
   </div>
   <div className="logos">
   <a href="https://github.com/farzan190" target="_blank"><img src={github} className="logo"/></a>
   <a href="https://www.linkedin.com/in/farzan-khan-7b5802278/" target="_blank"> <img src={linkedin} className="logo"/></a>
   <img src={x} className="logo"/>
   
   </div>  
   </div>
)
 }

export default Home;