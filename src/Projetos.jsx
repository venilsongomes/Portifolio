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
        <section id='projetos' className='py-20 scroll-mt-20 flex-col justify-center mb-10'>

           <div className=' text-center mb-12'>
            <h2 className='text-3xl md:text-4xl font-bold gradient-text'>Projetos</h2> 
        </div>

        <div class="grid grid-cols-3 gap-8 mb-10 px-4 max-[500px]:grid-cols-1 gap-4">
              
         
             
             {projetos.map((projeto, index) => (
                <div key={index} class="rounded-lg overflow-hidden card">
                    <img src={projeto.image} alt={`Imagem do Projeto ${projeto.name}`} className='w-full h-48 object-cover' />      
             

                    <div class="p-6">
                        <h3 class="text-xl font-bold mb-2 text-black">{projeto.name}</h3>
                        <p class="text-gray-400 mb-4">{projeto.description}</p>
                        <div class="flex space-x-4">
                            <a href={projeto.github} target="_blank" class="text-highlight-color hover:text-white transition-colors"><i class="fab fa-github mr-1"></i> Código</a>
                            <a href={projeto.demo} target="_blank" class="text-highlight-color hover:text-white transition-colors"><i class="fas fa-external-link-alt mr-1"></i> Demo</a>
                        </div>
                    </div>
                </div>
             ))}
        </div>

               
              
        </section>
    )
}
export default Projetos;
