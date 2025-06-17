
import React from "react";
import Drop from './assets/drop.svg'
import Seta from './assets/seta.png'
import App from "./App";


function Sliderr() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    speed: 3000,
    autoplaySpeed: 2000,
    cssEase: "ease-out",
    arrows: true
  };
  

  return (
    <div className="menu">
    
    
    <div className="dropdown">

    <button className="dropbtn"> <img src={Drop} alt="" /></button>
    <nav className="dropdown-content" >

       <li><a href="#home"></a>Home</li>
       <li><a href="#sobre"></a>Sobre</li>
       <li><a href="#projetos"></a>Projetos</li>
       <li><a href="contato"></a>Fale Comigo</li>
  
    </nav>
    </div>
    
      <ul  className="menuzin">
        <li><a href="#home">Home</a></li>
        <li><a href="#sobre">Sobre</a></li>
        <li><a href="#projetos">Projetos</a></li>
        <li><a href="#contato">Fale Comigo</a></li>
      </ul>

    </div>
    
  
    










   
  )}
  export default Sliderr