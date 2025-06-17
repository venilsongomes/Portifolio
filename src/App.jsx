import { useState } from 'react'
import './App.css'


import Git from './assets/git.svg'
import Zap from './assets/zap.svg'
import Likendin from './assets/likendin.svg'
import plano from './assets/plano.svg'

import Seta from './assets/seta.png'
import Pai from './assets/pai.svg'
import Carrossel from './Slider'
import SobreMim from './SobreMin'
import Navega from './Nav'
import Projetos from './Projetos'
import Rodape from './Rodape'
import Home from './home'



function App() {
  const [count, setCount] = useState(0);

  return (
    < main>
       <Navega></Navega>
       <Home></Home>
      <SobreMim></SobreMim>
      <Projetos></Projetos>
      <footer  id="contato"><Rodape></Rodape></footer>
        
   </main>
  );
}


export default App
