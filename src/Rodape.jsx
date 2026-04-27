import Git from './assets/github.png'
import Zap from './assets/whatsapp.png'
import Likendin from './assets/likendin.svg'
import x from './assets/x.svg'
import ins from './assets/linkedin.png'
import twiter from './assets/twitter.png'
import { useEffect } from 'react';
import PaginaOff from './Pagina_Off'
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';

function Rodape() {

  return (
    <div>

      <section id="contato" class="py-20 scroll-mt-20">
             <div class="text-center mb-12">
                <h2 class="text-3xl md:text-4xl font-bold text-gray-500">Entre em Contato</h2>
                 <p class="text-lg text-gray-4000 mt-4">Estou disponível para freelance e novas oportunidades. Vamos conversar!</p>
            </div>
            <div class="max-w-lg mx-auto text-center">
                 <a href="mailto:venilson@gmail.com" class="inline-block bg-highlight-color text-gray-600 font-bold py-3 px-8 rounded-lg text-lg hover:bg-opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl">
                    Mande um E-mail
                </a>
                <div class="mt-8 flex justify-center space-x-6">
                    <a href="https://www.linkedin.com/in/venilsongomes/" target="_blank" class="text-blue-300 hover:text-white text-3xl transition-transform duration-300 hover:scale-125"><i class="fab fa-linkedin"></i></a>
                    <a href="https://github.com/venilsongomes" target="_blank" class="text-green-300 hover:text-white text-3xl transition-transform duration-300 hover:scale-125"><i class="fab fa-github"></i></a>
                    <a href="https://www.instagram.com/venilson_gomes/" target="_blank" class="text-red-300 hover:text-white text-3xl transition-transform duration-300 hover:scale-125"><i class="fab fa-instagram"></i></a>
                </div>
            </div>
        </section>



   <footer className='bg-secondary-bg py-6 mt-20'>
    <div className='container mx-auto px-6 text-center text-gray-400'> 
      <p>&copy; 2024 Venilson Gomes. Todos os direitos reservados.</p>
    </div>
   </footer>
   </div>
  )
}
export default Rodape;