
import './Modals.css'
import { X } from '@phosphor-icons/react'


function Rele_Modal({isOpen, setRele_ModalOpen, children}) {
  
if (isOpen){
  return (
   <div className="bacgroud_fundo">
    <div className="bacgroud_mobal">
      <div className="conteudo">
        <button onClick={setRele_ModalOpen} className="modalbutton" ><X size={50} color="#8284fa" /></button>
        
        <div className='children'>{children}</div>
        </div>
    </div>
   </div>
    )
  }
}
  export default Rele_Modal