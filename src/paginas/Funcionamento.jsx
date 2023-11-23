
import "./Index.css"
import "./Funcionamento.css"
import projeto from '../img/fisico.jpg'
import Header from "./Header"



function Funcionamento() {
  

  return (
    <>
     <Header />

    <main className="funcionamento">
        <section className="fc">
            <h1 className="h1fc">Funcionamento</h1>
            
            <div className="fcconteudo">
            <p className="pfc">Nosso projeto consistirá em uma "caixa" que terá uma superfície com uma chapa de metal que poderá aquecer ou resfriar uma bebida em recipientes. Haverá um interruptor para aquecer e outro para resfriar. Quando o recipiente estiver sobre essa chapa de metal, o processo de aquecimento ou resfriamento da bebida começará assim que um dos interruptores for ativado. Se ambos forem ativados ao mesmo tempo, nada acontecerá.</p>
            

            <img src={projeto} alt="imagem do projeto" />
            </div>
        </section>
    </main>
    </>
    )
  }
  
  export default Funcionamento