
import './Modals.css'
import { X } from '@phosphor-icons/react'


function Fonte_Modal({isOpen, setFonte_ModalOpen, children}) {
  
if (isOpen){
  return (
   <div className="bacgroud_fundo">
    <div className="bacgroud_mobal">
      <div className="conteudo">
        <button onClick={setFonte_ModalOpen} className="modalbutton" ><X size={50} color="#4ea8de" /></button>
        
        <div className='children'>{children}</div>
        </div>
    </div>
   </div>
    )
  }
}
  export default Fonte_Modal