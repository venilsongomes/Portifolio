import react from 'react';
import './Sobre.css'


function Sobre(){
    return(
        
       
       <div id='sobre' className="sobreMin"> 

       <div class="text-center mb-12"> 

        <h1 class="md:text-4xl mb-4 mt-8 font-semibold container-sobre"> Sobre Mim </h1> 
         <p> Aqui você encontrará mais informações sobre mim, 
            o que faço e minhas habilidades atuais, <br></br> principalmente 
            em termos de programação e tecnologia. 
        </p>  
        </div>
        

        <section className="flex justify-center gap-10 cavalo">

         <div className="conhecer">
            <div class="text-center mb-12">
                <h2 class="text-3xl md:text-4xl font-bold text-gray-500">Habilidades</h2>
            </div>
            
                    <p> "Estudante de Sistemas de Informação e apaixonado por inovação tecnológica. Minha base sólida em JavaScript, Java (POO) e C foi aprimorada com React e Node. 
                     Busco oportunidades para aplicar minha paixão, habilidade e dedicação em projetos de desenvolvimento inovadores. 
                     Vamos criar o futuro da tecnologia juntos 
                     <br /> <button  className="btn btn-outline-primary" ><a className='text-decoration-none text-black' href="#contato">Contato</a></button>  </p>
             
            </div>

            
         <div class="text-center mb-12 ">
            <h1 className='mb-10 text-gray-500'> Minhas Skills</h1>

            <div className='skill'> 

                <div class="flex flex-col items-center p-4 rounded-lg card">
                    <i class="fab fa-html5 text-5xl text-orange-500 mb-2"></i>
                    <span class="font-semibold">HTML</span>
                </div>

              <div class="flex flex-col items-center p-4 rounded-lg card">
                    <i class="fab fa-css3-alt text-5xl text-blue-500 mb-2"></i>
                    <span class="font-semibold">CSS3</span>
                </div>

                <div class="flex flex-col items-center p-4 rounded-lg card">
                    <i class="fab fa-js-square text-5xl text-yellow-400 mb-2"></i>
                    <span class="font-semibold">JavaScript</span>
                </div>
                  <div class="flex flex-col items-center p-4 rounded-lg card">
                    <i class="fab fa-react text-5xl text-cyan-400 mb-2"></i>
                    <span class="font-semibold">React</span>
                </div>
                <div class="flex flex-col items-center p-4 rounded-lg card">
                    <i class="fab fa-node-js text-5xl text-green-500 mb-2"></i>
                    <span class="font-semibold">Node.js</span>
                </div>
                 <div class="flex flex-col items-center p-4 rounded-lg card">
                    <i class="fas fa-database text-5xl text-blue-400 mb-2"></i>
                    <span class="font-semibold">SQL</span>
                </div>
                 <div class="flex flex-col items-center p-4 rounded-lg card">
                    <i class="fab fa-git-alt text-5xl text-orange-600 mb-2"></i>
                    <span class="font-semibold">Git</span>
                </div>
                 <div class="flex flex-col items-center p-4 rounded-lg card">
                    <i class="fab fa-java text-5xl text-red-400 mb-2"></i>
                    <span class="font-semibold">Java</span>
                </div>
                 <div class="flex flex-col items-center p-4 rounded-lg card">
                    <i class="fab fa-bootstrap text-5xl text-purple-500 mb-2"></i>
                    <span class="font-semibold">Bootstrap</span>
                </div>
              
              </div>
              
            </div>
        </section>
       </div>
    )
}
export default Sobre;