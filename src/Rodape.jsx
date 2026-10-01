import { useEffect } from 'react';
import PaginaOff from './Pagina_Off'
import { i } from 'motion/react-client';
import { motion } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';

function Rodape() {

  return (
    <div className='bg-[#050E21]'>

      <section id="contato" class="py-20 scroll-mt-20">
             <div class="text-center mb-12">
                <h2 class="text-3xl md:text-4xl font-bold text-gray-200">Entre em Contato</h2>
                 <p class="text-lg text-gray-400 p-4">Estou disponível para freelance e novas oportunidades. Vamos conversar!</p>
            </div>
            <div class="max-w-lg mx-auto text-center">
                 
                <div class="mt-8 flex justify-center space-x-6">
                    <a href="https://www.linkedin.com/in/venilsongomes/" target="_blank" class="text-gray-400 hover:text-white text-3xl transition-transform duration-300 hover:scale-125"><i class="fab fa-linkedin"></i></a>
                    <a href="https://github.com/venilsongomes" target="_blank" class="text-gray-400 hover:text-white text-3xl transition-transform duration-300 hover:scale-125"><i class="fab fa-github"></i></a>
                    <a href="https://www.instagram.com/venilson_gomes/" target="_blank" class="text-gray-400 hover:text-white text-3xl transition-transform duration-300 hover:scale-125"><i class="fab fa-instagram"></i></a>
                </div>
            </div>
        </section>



   <footer className='flex justify-between py-6'>

    <div className='container mx-auto px-6 text-center text-gray-400'> 
      <p>&copy; 2024 Venilson Gomes. Todos os direitos reservados.</p>

    </div>
    <p className='text-green-500 text-3xl mr-10'>
       <motion.div animate={{   y: [0, 4, 0]  }}  transition={{   duration: 1,    repeat: Infinity,   ease: "easeInOut" }} className="text-sm">   <i className="fab fa-whatsapp ml-2 text-4xl"> </i></motion.div>
    </p>
   </footer>
   </div>
  )
}
export default Rodape;