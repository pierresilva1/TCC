import "./Index.css"
import "./Objetivo.css"
import Header from "./Header"
import projeto from '../img/fisico.jpg'


function Objetivo() {
 

  return (
    <>
    <Header />
    
    <main >
        <h1 className="h1ob">Objetivo</h1>
        <section className="ob">
            
            <p className="pob">A ideia do nosso projeto é aprimorar um projeto do ano passado, o qual consistia em uma caixa que tinha a finalidade de resfriar e manter as bebidas geladas enquanto você está trabalhando em um computador ou em locais de difícil acesso a bebidas geladas. Além disso, essa caixa poderia ser ligada.</p>
            <p className="pob"> A intenção deles era, no futuro, tornar esse projeto menor e mais portátil para que fosse de fácil acesso e utilização. De acordo com as conversas que tivemos com esse grupo, eles relataram que o tempo para que o sistema começasse a funcionar era demorado. Esse é um dos aspectos que planejamos melhorar neste projeto.</p>
            <img src={projeto} alt="" />
        </section>
    </main>
    
    </>
  )
  }
  
  export default Objetivo