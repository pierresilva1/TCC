import { useState } from "react"
import "./Index.css"
import "./Objetivo.css"
import { Link } from 'react-router-dom'
import { List, X } from '@phosphor-icons/react'
import logo from '../img/logo.png'
import logos from '../img/logos.png'



function Objetivo() {
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
    
    <main className="objetivo">
        <br />
        <section className="ob">
            <h1 className="h1ob">Objetivo</h1>
            <p className="pob">A ideia do nosso projeto é melhorar um projeto do ano passado cujo era uma caixa que servia para gelar e manter gelado a sua bebida enquanto você está em um computador ou em locais com difícil acesso a bebidas geladas e que de para ligá-lo, a intenção deles era no futuro deixar esse projeto menor e portátil para que fosse de fácil acesso e utilização. Pelo que foi conversado com esse grupo demorava muito para que o seu funcionamento começasse a funcionar e isso será uma das coisas que iremos melhorar nesse projeto.</p>
        </section>
        <br />
    </main>
    </>
  )
  }
  
  export default Objetivo