
import './Modals.css'
import { X } from '@phosphor-icons/react'


function Display_Modal({isOpen, setDisplay_ModalOpen, children}) {
  
if (isOpen){
  return (
   <div className="bacgroud_fundo">
    <div className="bacgroud_mobal">
      <div className="conteudo">
        <button onClick={setDisplay_ModalOpen} className="modalbutton" ><X size={50} color="#4ea8de" /></button>
        
        <div className='children'>{children}</div>
        </div>
    </div>
   </div>
    )
  }
}
  export default Display_Modal