
import './Modals.css'
import { X } from '@phosphor-icons/react'


function P4kre_Modal({isOpen, setP4kre_ModalOpen, children}) {
  
if (isOpen){
  return (
   <div className="bacgroud_fundo">
    <div className="bacgroud_mobal">
      <div className="conteudo">
        <button onClick={setP4kre_ModalOpen} className="modalbutton" ><X size={50} /></button>
        
        <div className='children'>{children}</div>
        </div>
    </div>
   </div>
    )
  }
}
  export default P4kre_Modal