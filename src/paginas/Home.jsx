
import "./Index.css"
import "./Home.css"
import Header from "./Header"
import dg from '../img/dg.png'
import dutra from '../img/dutra.png'
import pierre from '../img/pierre.png'
import ex from '../img/explicacao.gif'



function Home() {
    
    

  return (
    <>
    <Header />

    <main>
        <br />
        <section className="tudo">
            <h1>Bem-vindo(a)</h1>
            <h2>Ao nosso projeto</h2>
            <section className="Navegacao">
                <h3>TermoBlend</h3>
                
                <p className="ph">O TermoBlend é uma caixa com porta copo que vai esquentar ou gelar a sua bebida, de acordo com a sua escolha.</p>
                <img src={ex} alt="imagem do projeto" />
            </section>
            <section className="nos">
                <h1>Quem somos ?</h1>
                <div className="redes">
                <div className="pierre">
                <img src={pierre} alt="" />
                <p>Pierre Silva </p>
                <a href="https://www.instagram.com/pierre___silva/" className="insta">@pierre___silva</a>
                <p>18 anos</p>
                <p>UNASP SP</p>
                </div>
                <div className="dutra">
            <img src={dutra} alt="" />
                <p>Pedro Dutra</p>
                <a href="https://www.instagram.com/vulgodutra_/" className="insta">@vulgodutra_</a>
                <p>18 anos</p>
                <p>UNASP SP</p>
            </div>
            <div className="dg">
            <img src={dg} alt="" />
                <p>Caique Dias</p>
                <a href="https://www.instagram.com/caiquedg_102/" className="insta">@caiquedg_102</a>
                <p>18 anos</p>
                <p>UNASP SP</p>
            </div>
            </div>
            </section>
        </section>
        <br />
    </main>
    </>
  )
  }
  
  export default Home