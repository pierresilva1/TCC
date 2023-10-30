
import "./Index.css"
import "./Equipamentos.css"
import p4kre from '../img/p4kre.png'
import fonte_bivolt from '../img/fonte_bivolt.png'
import peltier from '../img/peltier.png'
import interruptor from '../img/interruptor.png'
import adp_bateria from '../img/adp_bateria.png'
import rele from '../img/rele.png'
import Header from "./Header"
import Peltier_Modal from "./modals/Peltier_Modal"
import { useState } from 'react'



function Equipamento() {
  const [openPeltier_Modal, setPeltier_ModalOpen] = useState(false)

  return (
    <>
     <Header />

    <main className="equipamentos">
        <br />
        <section className="eqss">
            <h1 className="dp">Dispositivos</h1>
        <section className="eqs">
            <div className="eq">
            <h2 className="dps">Pastilha Termoelétrica Peltier</h2>
          <button className="mdls" onClick={() => setPeltier_ModalOpen(true)}><img src={peltier} alt="" /></button>
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
            <Peltier_Modal isOpen={openPeltier_Modal} setPeltier_ModalOpen={() => setPeltier_ModalOpen(!openPeltier_Modal)}>
                
                <h2 className="dps">Pastilha Termoelétrica Peltier</h2>
            </Peltier_Modal>
        </section>
        </section>
        <br />
    </main>
    </>
    )
  }
  
  export default Equipamento