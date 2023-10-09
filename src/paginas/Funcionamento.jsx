
import "./Index.css"
import "./Funcionamento.css"
import pretatext from '../img/pretatext.png'
import Header from "./Header"



function Funcionamento() {
  

  return (
    <>
     <Header />

    <main className="funcionamento">
        <br />
        <section className="fc">
            <h1 className="h1fc">Funcionamento</h1>
            <div className="fcpimg">
            <p className="pfc">O nosso projeto será uma “caixa” aonde vai ter uma superfície com uma chapa de metal que vão esquentar ou esfriar uma bebida em recipientes, tendo um interruptor para esquentar e outro para esfriar, enquanto o recipiente estiver em cima dessa chapa de metal o processo de esquentar ou gelar a bebida começara assim que um dos interruptores forem ativados se os dois forem ativados ao mesmo tempo nada acontecera.</p>
            <img src={pretatext} alt="imagem do projeto" />
            </div>
        </section>
        <br />
    </main>
    </>
    )
  }
  
  export default Funcionamento