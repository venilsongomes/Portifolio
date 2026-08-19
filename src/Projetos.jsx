import './projetos.css'
import imf from './assets/pai.svg'
import sigaa from './assets/sigaa.png'
import cardapio from './assets/cardapio.png'
import clinica from './assets/clinica.png'
import Preview from './assets/preview.png'

function Projetos() {

const projetos = [
              { 
                name: 'Clínica de Estética',
                description: ' Samilla Maia – Estética Avançada Landing page institucional premium e responsiva desenvolvida para a clínica de estética avançada e integrativa Samilla Maia .',
                image: clinica,
                github: 'https://github.com/venilsongomes/clinica',
                demo: 'https://venilsongomes.github.io/clinica/' ,
                icon: 'fas fa-external-link-alt'
              },
              { 
                name: 'InfoSec-Consulting',
                description: ' InfoSec-Consulting – Serviços de consultoria em segurança da informação desenvolvidos para empresas que buscam proteger seus ativos digitais e garantir conformidade regulatória.',
                image: Preview,
                github: 'https://github.com/venilsongomes/InfoSec-Consulting',
                demo: 'https://info-sec-consulting.vercel.app/' ,
                icon: 'fas fa-external-link-alt'
              },

              { 
                name: 'Cardapio Online',
                description: 'Cardápio online interativo e responsivo para o bar Tio Patinha, agilizando o processo de pedidos e modernizando a comunicação.',
                image: cardapio,
                github: 'https://github.com/venilsongomes/cardapio',
                demo: 'https://venilsongomes.github.io/cardapio/' ,
                icon: 'fas fa-external-link-alt'
              }
              
              

]


    return (
        <section id='projetos' className='p-10 bg-[] scroll-mt-20 flex-col'>

           <div className=' mb-20'>
            <h2 className='text-3xl md:text-4xl font-serif text-[#050E21]'>Meus Projetos</h2> 
             <p className="font-light text-lg">
                 Aqui estão meus principais projetos, demonstrando minhas habilidades em desenvolvimento web e design. Cada projeto reflete meu compromisso com a qualidade, inovação e experiência do usuário.
             </p>
          </div>

        <div class="grid grid-cols-3 gap-8 mb-10 max-[500px]:grid-cols-1 gap-4">
              
         
             {projetos.map((projeto, index) => (
                <div key={index} class="rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
                   <a href={projeto.demo} target="_blank">
                     <img src={projeto.image} alt={`Imagem do Projeto ${projeto.name}`} className='w-full h-48 object-cover' />
                   </a>
                    <div class="p-6">
                        <h3 class="text-xl font-bold mb-2 text-black">{projeto.name}</h3>
                        <p class="text-gray-400 mb-4">{projeto.description}</p>
                        <div class="flex space-x-4">
                            <a href={projeto.github} target="_blank" class="text-[#050E21] hover:text-gray-400 transition-colors"><i class="fab fa-github mr-1"></i> Código</a>
                            <a href={projeto.demo} target="_blank" class="text-[#050E21] hover:text-gray-400 transition-colors"><i class="fas fa-external-link-alt mr-1"></i> Demo</a>
                        </div>
                    </div>
                </div>
             ))}
        </div>

               
              
        </section>
    )
}
export default Projetos;
