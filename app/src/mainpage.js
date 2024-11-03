import picture from "./assets/1582274123139.jpg";

 const Home=()=>{
 
    return (
   <div className="main">
    <div className="left"><img src={picture} className="picture"/></div>
    
    <div className="right">
  <div className="name">Farzan Khan</div>
  <div className="profession">Frontend Engineer @DXC</div>
  <p>Building with ReactJS, TypeScript and CSS</p>
  </div>
  
   </div>
)
 }

export default Home;