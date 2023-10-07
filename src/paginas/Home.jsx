
import "./Index.css"
import "./Home.css"

import dg from '../img/dg.png'
import dutra from '../img/dutra.png'
import pierre from '../img/pierre.png'
import { Link } from 'react-router-dom'


function Home() {
    
    

  return (
    <>
    <main>
        <br />
        <section className="tudo">
            <h1>Bem vindo(a)</h1>
            <h3>Ao nosso projeto: TermoBlend</h3>
            <section className="Navegacao">
                <h2>Navegação</h2>
                <div className="bts">
                <div className="btss">
                   <button ><Link to={'/Objetivo'} className="ah">Objetivo</Link></button>
                   <button ><Link to={'/Funcionamento'} className="ah">Funcionamento</Link></button>
                   <button ><Link to={'/Equipamento'} className="ah">Equipamento</Link></button>
                   </div>
            </div>
            </section>
            <section className="nos">
                <h1>Quem somos ?</h1>
                <div className="redes">
                <div className="pierre">
                <img src={pierre} alt="" />
                <p>Pierre Silva de Sá</p>
                <a href="https://www.instagram.com/pierre___silva/" className="insta">@pierre___silva</a>
                <p>18 anos</p>
                <p>UNASP SP</p>
                </div>
                <div className="dutra">
            <img src={dutra} alt="" />
                <p>Pedro Henque Dutra</p>
                <a href="https://www.instagram.com/vulgodutra_/" className="insta">@vulgodutra_</a>
                <p>18 anos</p>
                <p>UNASP SP</p>
            </div>
            <div className="dg">
            <img src={dg} alt="" />
                <p>Caique Dias </p>
                <a href="https://www.instagram.com/caiquedg_102/" className="insta">@caiquedg_102</a>
                <p>17 anos</p>
                <p>UNASP SP</p>
            </div>
            </div>
            </section>
        </section>
        <br />
    </main>
    </>
  )
  }
  
  export default Home