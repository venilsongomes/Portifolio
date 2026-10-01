import { useState } from 'react';
import { i } from 'motion/react-client';
import { motion } from 'framer-motion';
function Navegacao() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  return (
    <nav  className="flex bg-[#050E21] justify-between p-3 text-gray-300 fixed top-0 left-0 right-0 shadow z-1">

      <div className="hidden md:flex flex items-center gap-2">
        <a href="#home" className="inline-flex items-center no-underline">
          <div className="flex items-center gap-2 hover:text-[#D4AF37] transition-colors duration-300">
            
            <p className='text-lg font-bold text-gray-300'>VR</p>
          </div>
        </a>
      </div>

      <button
        onClick={toggleMenu}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        className="flex items-center gap-2 md:hidden z-20"
      >
        <i className="fas fa-bars" aria-hidden="true"></i>
        <span className="sr-only">Abrir menu</span>
      </button>

      <ul className="hidden md:flex  gap-8 items-center">

          <li><a href="#home" className='no-underline text-gray-300 hover:text-[#A67314]'>Home</a></li>
          <li><a href="sobre" className='no-underline text-gray-300 hover:text-[#A67314]'>Sobre</a></li>
          <li> <a href="#projetos" className='no-underline text-gray-300 hover:text-[#A67314]'>Projetos</a> </li>
          <li><a href="#contato" className='no-underline text-gray-300 hover:text-[#A67314]'>Contato</a></li>
          
      </ul>

      <ul
        id="mobile-menu"
        className={`fixed right-0 top-15 w-full bg-gray-800 border-b flex flex-col gap-3 p-3 italic text-xl transition-all duration-300 ease-in-out md:hidden ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        <li><a href="#home" className="no-underline font-semibold text-sm hover:text-[#D4AF37]" onClick={toggleMenu}>Home</a></li>
        <li><a href="#sobre" className="no-underline font-semibold text-sm hover:text-[#D4AF37]" onClick={toggleMenu}>Sobre</a></li>
        <li><a href="#projetos" className="no-underline font-semibold text-sm hover:text-[#D4AF37]" onClick={toggleMenu}>Projetos</a></li>
        <li><a href="#contato" className="no-underline font-semibold text-sm hover:text-[#D4AF37]" onClick={toggleMenu}>Contato</a></li>

      </ul>

      <a href="#contact" className="no-underline text-[12px] hover:text-[#D4AF37] text-white p-2 md:p-2 rounded inline-flex items-center h-fit">
            <motion.div animate={{   y: [0, 4, 0]  }}  transition={{   duration: 1,    repeat: Infinity,   ease: "easeInOut" }} >   <i className="fab fa-whatsapp text-3xl"> </i></motion.div>
      </a>
  
    </nav>
  );
}

export default Navegacao;