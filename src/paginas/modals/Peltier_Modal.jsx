
import './Modals.css'
import { X } from '@phosphor-icons/react'


function Peltier_Modal({isOpen, setPeltier_ModalOpen, children}) {
  
if (isOpen){
  return (
   <div className="bacgroud_fundo">
    <div className="bacgroud_mobal">
      <div className="conteudo">
        <button onClick={setPeltier_ModalOpen} className="modalbutton" ><X size={50} /></button>
        
        <div className='children'>{children}</div>
        </div>
    </div>
   </div>
    )
  }
}
  export default Peltier_Modal