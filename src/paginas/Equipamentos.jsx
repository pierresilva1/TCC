import { useState } from "react"
import "./Index.css"
import { Link } from 'react-router-dom'
import { List, X } from 'phosphor-icons'

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
    <header>
        <div className="menu-mobile">
            <div className="botao-menu">
                <button onClick={handleAbrirFecharMenu}>{abrirFechar == true ? <X size={32} /> : <List size={32} /> }</button>
            </div>

            <div className={`menu ${abrirFechar == true ? "" : "close"}`}>
                <nav>
                <Link to={'/'}>Home</Link>
                <Link to={'/Objetivo'}>Objetivo</Link>
                <Link to={'/Funcionamento'}>Funcionamento</Link>
                <Link to={'/Equipamento'}>Equipamento</Link>
                <Link to={'/Biografia'}>Biografia</Link>
                </nav>
            </div>
        </div>

        <div className="menu-desktop">
            <h1>Acessa aí</h1>

            <nav>
                <Link to={'/'}>Home</Link>
                <Link to={'/Objetivo'}>Objetivo</Link>
                <Link to={'/Funcionamento'}>Funcionamento</Link>
                <Link to={'/Equipamento'}>Equipamento</Link>
                <Link to={'/Biografia'}>Biografia</Link>
                </nav>
        </div>
    </header>

    
    )
  }
  
  export default Equipamento