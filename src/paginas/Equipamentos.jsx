import { useState } from "react"
import "./Index.css"
import "./Equipamentos.css"
import { Link } from 'react-router-dom'
import { List, X } from '@phosphor-icons/react'
import p4kre from '../img/p4kre.png'
import fonte_bivolt from '../img/fonte_bivolt.png'
import peltier from '../img/peltier.png'
import interruptor from '../img/interruptor.png'
import adp_bateria from '../img/adp_bateria.png'
import rele from '../img/rele.png'
import logo from '../img/logo.png'
import logos from '../img/logos.png'



function Equipamento() {
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

    <main className="equipamentos">
        <br />
        <section className="eqss">
            <h1 className="dp">Dispositivos</h1>
        <section className="eqs">
            <div className="eq">
            <h2 className="dps">Pastilha Termoelétrica Peltier</h2>
            <img src={peltier} alt="" />
            </div>
            <div className="eq">
                <h2 className="dps">Módulos ralé</h2>
                <img src={rele} alt="" />
            </div>
        </section>
        <section className="eqs">
            <div className="eq">
            <h2 className="dps">Interruptor</h2>
            <img src={interruptor} alt="" />
            </div>
            <div className="eq">
            <h2 className="dps">Adaptador de bateria</h2>
            <img src={adp_bateria} alt="" />
            </div>
        </section>
        <section className="eqs">
            <div className="eq">
            <h2 className="dps">Adaptador P4/KRE</h2>
            <img src={p4kre} alt="" />
            </div>
            <div className="eq">
            <h2 className="dps">Fonte bivolt</h2>
            <img src={fonte_bivolt} alt="" />
            </div>
        </section>
        </section>
        <br />
    </main>
    </>
    )
  }
  
  export default Equipamento