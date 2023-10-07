import { useState } from "react"
import "./Index.css"
import "./Funcionamento.css"
import { Link } from 'react-router-dom'
import { List, X } from '@phosphor-icons/react'
import pretatext from '../img/pretatext.png'
import logo from '../img/logo.png'
import logos from '../img/logos.png'



function Funcionamento() {
  const [abrirFechar, setAbrirFechar] = useState(false)

    function handleAbrirFecharMenu() {
        if(abrirFechar) {
            setAbrirFechar(false)
            return
        }

        setAbrirFechar(true)
    }

  return (
    <>
    <header>
        <div className="menu-mobile">
            <div className="botao-menu">
            <Link to={'/'}><img src={logos} alt="logo" className="logo" /></Link>
                <button onClick={handleAbrirFecharMenu}>{abrirFechar == true ? <X size={32} /> : <List size={32} /> }</button>
            </div>

            <div className={`menu ${abrirFechar == true ? "" : "close"}`}>
                <nav>
                <Link to={'/'} className="as">Home</Link>
                <Link to={'/Objetivo'} className="as">Objetivo</Link>
                <Link to={'/Funcionamento'} className="as">Funcionamento</Link>
                <Link to={'/Equipamento'} className="as">Equipamento</Link>
                </nav>
            </div>
        </div>

        <div className="menu-desktop">
        <Link to={'/'}><img src={logo} alt="logo" className="logo" /></Link>
        
            <nav>
                <Link to={'/'} className="as">Home</Link>
                <Link to={'/Objetivo'} className="as">Objetivo</Link>
                <Link to={'/Funcionamento'} className="as">Funcionamento</Link>
                <Link to={'/Equipamento'} className="as">Equipamento</Link>
                </nav>
        </div>
    </header>

    <main className="funcionamento">
        <br />
        <section className="fc">
            <h1 className="h1fc">Funcionamento</h1>
            <div className="fcpimg">
            <p className="pfc">O nosso projeto será uma “caixa” aonde vai ter uma superfície com uma chapa de metal que vão esquentar ou esfriar uma bebida em recipientes, tendo um interruptor para esquentar e outro para esfriar, enquanto o recipiente estiver em cima dessa chapa de metal o processo de esquentar ou gelar a bebida começara assim que um dos interruptores forem ativados se os dois forem ativados ao mesmo tempo nada acontecera.</p>
            <img src={pretatext} alt="imagem do projeto" />
            </div>
        </section>
        <br />
    </main>
    </>
    )
  }
  
  export default Funcionamento