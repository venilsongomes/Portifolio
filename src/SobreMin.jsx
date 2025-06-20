import react from 'react';
import './Sobre.css'


function Sobre(){
    return(
        
       
       <div id='sobre' className="sobreMin"> 
        <h1> Sobre Mim </h1> 
         <p> Aqui você encontrará mais informações sobre mim, 
            o que faço e minhas habilidades atuais, <br></br> principalmente 
            em termos de programação e tecnologia. 
        </p>

        <section className="conteiner-sobre">
         <div className="conhecer">
            <h1> Venha Me Conhecer!</h1>
            
                    <p> "Estudante de Sistemas de Informação e apaixonado por inovação tecnológica. Minha base sólida em JavaScript, Java (POO) e C foi aprimorada com React e Node. 
                     Busco oportunidades para aplicar minha paixão, habilidade e dedicação em projetos de desenvolvimento inovadores. 
                     Vamos criar o futuro da tecnologia juntos 
                     <br /> <button className="btn btn-outline-primary" >Contato</button>  </p>
             
            </div>

            
         <div className="conhecer">
            <h1> Minhas Skills</h1>
            <div className='skill'> 
              <div className='skills'>HTML</div>
              <div className='skills'>CSS</div>
              <div className='skills'>JavaScript</div>
              <div className='skills'>NodeJs</div>
              <div className='skills'>Java</div>
              <div className='skills'>POO</div>  
               <div className='skills'>Design Responsivo</div>
              <div className='skills'>React</div>
              <div className='skills'>BootStrap</div>
              <div className='skills'>Figma</div>
              <div className='skills'>UI/UX</div>
              <div className='skills'>Git</div> 
              </div>
              
            </div>
        </section>
       </div>
    )
}
export default Sobre;