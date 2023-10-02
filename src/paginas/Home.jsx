
import "./Index.css"
import "./Home.css"

import dg from '../img/dg.png'
import dutra from '../img/dutra.png'
import pierre from '../img/pierre.png'
import { Link } from 'react-router-dom'

function Home() {
    function handleObjetivo() {
        <Link to={'/Objetivo'}/>
    }
    function handleFuncionamento() {
        <Link to={'/Funcionamento'}/>
    }
    function handleEquipamento() {
        <Link to={'/Equipamento'}/>
    }
    

  return (
    <>
    <main>
        <br />
        <section className="tudo">
            <h1>Bem vindo(a)</h1>
            <h3>Ao nosso projeto TCC</h3>
            <section className="Navegacao">
                <h2>Navegação</h2>
                <div className="bts">
                <div className="btss">
                   <button onClick={handleObjetivo}>Objetivo</button>
                   <button onClick={handleFuncionamento}>Funcionamento</button>
                   </div>
                   <div className="btsss">
                   <button onClick={handleEquipamento}>Equipamento</button>
                   </div>
            </div>
            </section>
            <section className="nos">
                <h1>Quem somos ?</h1>
                <div className="redes">
                <div className="pierre">
                <img src={pierre} alt="" />
                <p>Pierre Silva de Sá</p>
                <p>@pierre___silva</p>
                <p>18 anos</p>
                <p>UNASP SP</p>
                </div>
                <div className="dutra">
            <img src={dutra} alt="" />
                <p>Pedro Henque Dutra</p>
                <p>@vulgodutra_</p>
                <p>18 anos</p>
                <p>UNASP SP</p>
            </div>
            <div className="dg">
            <img src={dg} alt="" />
                <p>Caique Dias </p>
                <p>@caiquedg_102</p>
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