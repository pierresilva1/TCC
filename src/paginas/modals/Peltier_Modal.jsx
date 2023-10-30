
import './Modals.css'
import { X } from '@phosphor-icons/react'


function Peltier_Modal({isOpen, setPeltier_ModalOpen, children}) {
  
if (isOpen){
  return (
   <div className="bacgroud_fundo">
    <div className="bacgroud_mobal">
        <button onClick={setPeltier_ModalOpen}><X size={32} /></button>
        <div>{children}</div>
    </div>
   </div>
    )
  }
}
  export default Peltier_Modal