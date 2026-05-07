import './projetos.css'
import imf from './assets/pai.svg'
import sigaa from './assets/sigaa.png'
import cardapio from './assets/cardapio.png'
import almoxarifado from './assets/almox.png'

function Projetos() {
    return (
        <section id='projetos' className='py-20 scroll-mt-20 flex-col justify-center mb-10'>

           <div className=' text-center mb-12'>
            <h2 className='text-3xl md:text-4xl font-bold gradient-text'>Projetos</h2> 
        </div>

        <div class="grid grid-cols-3 gap-8 mb-10 px-4 max-[500px]:grid-cols-1 gap-4">
              
               <div class="">
                
                <div class="rounded-lg overflow-hidden card">
               <img src={cardapio} alt="Imagem do Projeto Cardápio" className='w-full h-48 object-cover' />
                    <div class="p-6">
                        <h3 class="text-xl font-bold mb-2 text-white">Cardápio Online</h3>
                        <p class="text-gray-400 mb-4">Cardápio online interativo e responsivo para o bar Tio Patinha, agilizando o processo de pedidos e modernizando a comunicação.</p>
                        <div class="flex space-x-4">
                            <a href="https://github.com/venilsongomes/Cardapio" target="_blank" class="text-highlight-color hover:text-white transition-colors"><i class="fab fa-github mr-1"></i> Código</a>
                            <a href="https://venilsongomes.github.io/Cardapio/" target="_blank" class="text-highlight-color hover:text-white transition-colors"><i class="fas fa-external-link-alt mr-1"></i> Demo</a>
                        </div>
                    </div>
                </div>
                </div>


                
                <div class="rounded-lg overflow-hidden card">
               <img src={almoxarifado} alt="Imagem do Projeto Almoxarifado" className='w-full h-48 object-cover' />
                    <div class="p-6">
                        <h3 class="text-xl font-bold mb-2 text-white">Almoxarifado</h3>
                        <p class="text-gray-400 mb-4">Sistema de gerenciamento de estoque para o almoxarifado da universidade, otimizando o processo de controle de materiais e equipamentos.</p>
                        <div class="flex space-x-4">
                            <a href="https://github.com/venilsongomes/Almoxarifado" target="_blank" class="text-highlight-color hover:text-white transition-colors"><i class="fab fa-github mr-1"></i> Código</a>
                            <a href="https://venilsongomes.github.io/Almoxarifado/" target="_blank" class="text-highlight-color hover:text-white transition-colors"><i class="fas fa-external-link-alt mr-1"></i> Demo</a>
                        </div>
                    </div>
                </div>
              

                 <div class="">
                
                <div class="rounded-lg overflow-hidden card">
               <img src={sigaa} alt="Imagem do Projeto Sigaa" className='w-full h-48 object-cover' />
                    <div class="p-6">
                        <h3 class="text-xl font-bold mb-2 text-white">Sigaa</h3>
                        <p class="text-gray-400 mb-4">Clone do Sistema de gerenciamento acadêmico para a Universidade Federal de Goiás.</p>
                        <div class="flex space-x-4">
                            <a href="https://github.com/venilsongomes/sigaa" target="_blank" class="text-highlight-color hover:text-white transition-colors"><i class="fab fa-github mr-1"></i> Código</a>
                            <a href="https://venilsongomes.github.io/sigaa/" target="_blank" class="text-highlight-color hover:text-white transition-colors"><i class="fas fa-external-link-alt mr-1"></i> Demo</a>
                        </div>
                    </div>
                </div>
                </div>

                </div>
        </section>
    )
}
export default Projetos;
