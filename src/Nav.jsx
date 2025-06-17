import './nav.css'
import Drop from './assets/drop.svg'

function Nav(){
    return (

        
<nav className="menu">
  
       <nav className='dropdown'>  
          
        <button className="dropbtn"> <img src={Drop} alt="" /></button>

        <ul className="dropdown-content">
         
        <li>  <a href="#home"> Home</a></li>
        <li>  <a href="#sobre">Sobre</a></li>
        <li>  <a href="#Projetos"> Projetos</a></li>
        <li>  <a href="#contato">Fale Comigo</a></li>

        </ul>
      </nav>
        
          <ul className="menuzin">
            <a href="#home">
              <li>Home</li>
            </a>
            <a href="#sobre">
              <li>Sobre</li>
            </a>
            <a href="#projetos">
              <li>Projetos</li>
            </a>
            <a href="#contato">
              <li>Fale Comigo</li>
            </a>
          </ul>
        
      </nav>
       
    )
}
export default Nav;