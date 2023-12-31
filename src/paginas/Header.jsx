import { useState } from "react"
import "./Index.css"
import "./Objetivo.css"
import { Link } from 'react-router-dom'
import { List, X } from '@phosphor-icons/react'
import logoDesktop from '../img/logo-desktop.png'




function Header() {
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
                <Link to={'/'}>
                    <img src={logoDesktop} alt="logo" className="logo-mobile" />
                </Link>
                <button onClick={handleAbrirFecharMenu}>{abrirFechar == true ? <X size={32} color="#8284fa" /> : <List size={32} color="#8284fa" /> }</button>
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
            <nav>
                <Link to={'/'} className="as">Home</Link>
                <Link to={'/Objetivo'} className="as">Objetivo</Link>
                <Link to={'/'}><img src={logoDesktop} alt="logo" className="logo-desktop" /></Link>
                <Link to={'/Funcionamento'} className="as">Funcionamento</Link>
                <Link to={'/Equipamento'} className="as">Equipamento</Link>
            </nav>
        </div>
    </header>
    </>
  )
  }
  
  export default Header