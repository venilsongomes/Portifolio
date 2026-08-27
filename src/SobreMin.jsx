import react from 'react';
import './Sobre.css'


function Sobre(){
    return(
        
       
       <div id='sobre' className="p-20 scroll-mt-20 flex-col"> 

       <div class=" text-center mb-40"> 

        <h1 class="text-3xl md:text-4xl mt-10 mb-4 font-serif text-gray-500"> Sobre Mim </h1> 
         <p className='font-light'> Aqui você encontrará mais informações sobre mim, 
            o que faço e minhas habilidades atuais, <br></br> principalmente 
            em termos de programação e tecnologia. 
        </p>  
        </div>
        

        <section className="flex justify-between gap-10 mt-10 max-[500px]:flex-col">

         <div className="w-1/2">
            <div class="">
                <h2 class="text-3xl md:text-4xl font-serif mb-10">Habilidades</h2>
            </div>
            
                    <p className='text-justify font-light'> Bacharel em Sistemas de Informação (UFG),. 
                        Experiência em desenvolvimento web (React, Node.js, Java) e banco de dados (SQL, MongoDB). 
                        Sólida bagagem em infraestrutura de TI e resolução de problemas complexos. 
                     <br /> <button  className="" ><a className='text-decoration-none text-black' href="#contato">Contato</a></button>  </p>
             
            </div>

            
         <div class=" ">
            <h1 className='text-3xl mb-10 md:text-4xl font-serif text-gray-500'> Minhas Skills</h1>

            <div className='grid grid-cols-4 gap-4 mt-4 max-[500px]:grid-cols-1'> 

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
                
              
              </div>
              
            </div>
        </section>
       </div>
    )
}
export default Sobre;