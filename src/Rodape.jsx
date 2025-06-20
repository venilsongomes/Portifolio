import Git from './assets/github.png'
import Zap from './assets/whatsapp.png'
import Likendin from './assets/likendin.svg'
import x from './assets/x.svg'
import ins from './assets/linkedin.png'
import twiter from './assets/twitter.png'
import './Rodape.css'
import { useEffect } from 'react';
import PaginaOff from './Pagina_Off'
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';

function Rodape() {

  return (
    <div className='rodape'>
      <div className='content'>

        <p className='texto'>
           <span>Venilson Rocha </span>"Aerodinamicamente o corpo de uma abelha não é feito para voar.
          O bom é que as abelhas não sabem disto." 
          </p>

        <div className="social">

          <h1 >Social</h1>

          <a href="https://github.com/venilsongomes" target="_blank">
            <img src={Git} alt="" />
          </a>
          <a href="https://www.linkedin.com/in/venilsongomes/" target="_blank">
            < img className='x' src={Zap} alt="" />
          </a>
          <a href="https://www.linkedin.com/in/venilsongomes/" target="_blank">
            <img src={ins} alt=""  />
          </a>

          <a href="https://x.com/venilson1019" target="_blank">
            <img src={twiter} alt=""  />
          </a>

      
           
         
        </div>
      </div>



      <p className='copy'>Copyrigh &copy; Venilson Rocha - 2025</p>

    </div>
  )
}
export default Rodape;