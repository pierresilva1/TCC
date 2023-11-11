import { useState } from "react"
import "./Index.css"
import "./Objetivo.css"
import { Link } from 'react-router-dom'
import { List, X } from '@phosphor-icons/react'
import logo from '../img/logo2.png'
import logos from '../img/logos2.png'



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
            <Link to={'/'}><img src={logos} alt="logo" className="logos " /></Link>
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
                </nav>
                <Link to={'/'}><img src={logo} alt="logo" className="logo" /></Link>
                <nav>
                <Link to={'/Funcionamento'} className="as">Funcionamento</Link>
                <Link to={'/Equipamento'} className="as">Equipamento</Link>
                
                </nav>
        </div>
    </header>
    </>
  )
  }
  
  export default Header