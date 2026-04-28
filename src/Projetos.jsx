import './projetos.css'
import imf from './assets/pai.svg'
import sigaa from './assets/sigaa.png'
import cardapio from './assets/cardapio.png'
import almoxarifado from './assets/almox.png'

function Projetos() {
    return (
        <div id='projetos' className='projetos bg-slate-500'>
            <div className='inicio'>
                <h1 className='md:text-4xl mb-4 mt-8 font-semibold text-xl' >Projetos</h1>
                <p className='text-xl text-gray-200'>
                    Aqui você encontra minhas principais criações e habilidades em ação.
                </p>
            </div>

            <div className='projetos-card'>


                <div className="card gap-10">
                    <img src={cardapio} alt="" />
                    <div>
                        <h2 className='text-gray-400'>Cardápio</h2>
                        <p className='text01'>
                            Este projeto consiste em um cardápio online interativo e responsivo,
                            desenvolvido expecificamente para bar Tio Patinha, que desejava modernizar sua comunicação com o
                            cliente e agilizar o processo de pedido. Utilizando React, JavaScript e Bootstrap,
                            a aplicação oferece uma experiência de usuário impecável, com um design limpo e navegação facilitada.
                            Os clientes podem explorar o menu de forma digital, com informações detalhadas e imagens dos produtos,
                            eliminando a necessidade de cardápios físicos e proporcionando um atendimento mais eficiente.

                          </p> <button className="btn btn-outline-primary"> <a href="https://venilsongomes.github.io/Cardapio/ " target='_blank'>Vê Projeto</a></button>

                          <p className='text02'>Este projeto consiste em um cardápio online interativo e responsivo,
                            desenvolvido expecificamente para bar Tio Patinha, que desejava modernizar sua comunicação com o
                            cliente e agilizar o processo de pedido.</p>
                           
                        
                    </div>
                </div>

                <div className="card gap-10">
                    <img src={almoxarifado} alt="" />
                    <div>
                        <h2 className='text-gray-400'>Almoxarifado</h2>
                        <p className='text01'>
                            Desenvolvi um sistema completo para a organização e o controle eficiente de almoxarifados,
                            projetado para otimizar a gestão de estoque e reduzir perdas. A aplicação oferece funcionalidades essenciais
                            para cadastro de produtos, controle de entrada e saída, rastreamento de itens e geração de relatórios,
                            proporcionando maior visibilidade e controle sobre os ativos.
                            Ideal para empresas que buscam modernizar sua logística interna e aumentar a precisão de seus inventários. 
                          </p>  <button className="btn btn-outline-primary"> <a href=" https://venilsongomes.github.io/Almox/ " target='_blank'>Ve Projeto</a></button>

                          <p className='text02'> Desenvolvi um sistema completo para a organização e o controle eficiente de almoxarifados,
                            projetado para otimizar a gestão de estoque e reduzir perdas.</p>
                        
                    </div>
                </div>

                <div className="card gap-10">
                    <div> < img  src={sigaa} alt="" />  </div>
                    <div>
                        <h2 className='text-gray-400'>Clone Sistema Acadêmico - UFG</h2>
                        <p className='text01'>
        
                            Este projeto é um clone do front-end do SIGAA (UFG),
                            onde repliquei a interface e a experiência de usuário do sistema acadêmico.
                            Desenvolvido com React, estilizado com CSS e Bootstrap, e hospedado no GitHub
                            Pages, ele demonstra minhas habilidades em desenvolvimento front-end,
                            design responsivo e deploy de aplicações. </p>
                            <button className="btn btn-outline-primary"><a href="https://venilsongomes.github.io/Sigaa/ " target='_blank'>Vê Projeto</a></button>

                            <p className='text02'> Este projeto é um clone do front-end do SIGAA (UFG),
                            onde repliquei a interface e a experiência de usuário do sistema acadêmico.</p>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Projetos;
