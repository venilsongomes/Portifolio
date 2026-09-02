import { useState } from 'react'
import './App.css'
import './index.css'

import Pai from './assets/pai.svg'
import Carrossel from './Slider'
import SobreMim from './SobreMin'
import Navega from './Navegacao'
import Projetos from './Projetos'
import Rodape from './Rodape'
import Home from './Home'



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
