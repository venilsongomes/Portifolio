import Git from './assets/git.svg'
import Zap from './assets/zap.svg'
import Likendin from './assets/likendin.svg'
import x from './assets/x.svg'
import ins from './assets/likendi.svg'
import './Rodape.css'

function Rodape() {
  return (
    <div className='rodape'>
      <div className='content'>

        <p className='texto'>
           <span>Venilson Rocha </span>"Aerodinamicamente o corpo de uma abelha não é feito para voar.
          O bom é que as abelhas não sabem disto." 
          </p>

        <div className="social">

          <h1 >Social</h1>

          <a href="https://github.com/venilsongomes" target="_blank">
            <img src={Git} alt="" />
          </a>
          <a href="https://www.linkedin.com/in/venilsongomes/" target="_blank">
            < img className='x' src={ins} alt="" />
          </a>
          <a href="">
            <img src={Likendin} alt="" />
          </a>

           <a  href="">
            <img  src={x} alt="" />
          </a>
        </div>
      </div>



      <p className='copy'>Copyrigh &copy; Venilson Rocha - 2025</p>

    </div>
  )
}
export default Rodape;