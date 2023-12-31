
import "./Index.css"
import "./Equipamentos.css"
import "./modals/Modals.css"
import p4kre from '../img/p4kre.png'
import fonte_bivolt from '../img/fonte_bivolt.png'
import peltier from '../img/peltier.png'
import interruptor from '../img/interruptor.png'
import rele from '../img/rele.png'
import botao from '../img/bt.png'
import displayLCD from '../img/display-lcd.png'
import Header from "./Header"
import Peltier_Modal from "./modals/Peltier_Modal"
import Rele_Modal from "./modals/Rele_Modal"
import P4kre_Modal from "./modals/P4kre_Modal"
import Fonte_Modal from "./modals/Fonte_Modal"
import Interruptor_Modal from "./modals/Interruptor_Modal"
import { ShoppingCart } from '@phosphor-icons/react'
import { useState } from 'react'
import Display_Modal from "./modals/Display_Modal"
import Botao_Modal from "./modals/Botao_Modal"



function Equipamento() {
  const [openPeltier_Modal, setPeltier_ModalOpen] = useState(false)
  const [openRele_Modal, setRele_ModalOpen] = useState(false)
  const [openInterruptor_Modal, setInterruptor_ModalOpen] = useState(false)
  const [openP4kre_Modal, setP4kre_ModalOpen] = useState(false)
  const [openFonte_Modal, setFonte_ModalOpen] = useState(false)
  const [openDisplay_Modal, setDisplay_ModalOpen] = useState(false)
  const [openBotao_Modal, setBotao_ModalOpen] = useState(false)

  return (
    <>
     <Header />

    <main className="equipamentos">
        <br />
        <section className="eqss">
            <h1 className="dp">Dispositivos</h1>
        <section className="eqs">
            <div className="eq">
            <h2 className="dps">Pastilha Termoelétrica Peltier</h2>
          <button className="mdls" onClick={() => setPeltier_ModalOpen(true)}><img src={peltier} alt="" /></button>
            </div>
            <div className="eq">
                <h2 className="dps">Módulos relé</h2>
                <button className="mdls" onClick={() => setRele_ModalOpen(true)}><img src={rele} alt="" /></button>
            </div>
        </section>
        <section className="eqs">
            <div className="eq">
            <h2 className="dps">Chave Gangorra</h2>
            <button className="mdls" onClick={() => setInterruptor_ModalOpen(true)}><img src={interruptor} className="interruptor" alt="" /></button>
            </div>
            <div className="eq">
            <h2 className="dps">Fonte bivolt</h2>
            <button className="mdls" onClick={() => setFonte_ModalOpen(true)}><img src={fonte_bivolt} className="fonte" alt="" /></button>
            </div>
        </section>
        <section className="eqs">
            <div className="eq">
            <h2 className="dps">Botão</h2>
            <button className="mdls" onClick={() => setBotao_ModalOpen(true)}><img src={botao}  alt="" /></button>
            </div>
            <div className="eq">
            <h2 className="dps">Display lcd i2c</h2>
            <button className="mdls" onClick={() => setDisplay_ModalOpen(true)}><img src={displayLCD} alt="" /></button>
            </div>
        </section>
        <section className="eqs">
            <div className="eq">
            <h2 className="dps">Adaptador P4/KRE</h2>
            <button className="mdls" onClick={() => setP4kre_ModalOpen(true)}><img src={p4kre} alt="" /></button>
            </div>
        </section>
        <Peltier_Modal isOpen={openPeltier_Modal} setPeltier_ModalOpen={() => setPeltier_ModalOpen(!openPeltier_Modal)}>
                <div className="modalsls">
                <h2 className="h2modal">Pastilha Termoelétrica Peltier</h2>
                <img src={peltier} alt="" className="imgmodals"/>
                <p>A pastilha Peltier é um cooler termoelétrico utilizado em purificadores de água, bebedouros e mini refrigeradores de diversas marcas. Também pode ser empregado em projetos alternativos de refrigeração de computadores. Sua alta performance garante, em poucos minutos, o aquecimento ou resfriamento de objetos.</p>
                <br />
                <a href="https://www.eletrogate.com/pastilha-termoeletrica-peltier-tec1-12706" className="amodals"><button>Compre Aqui <ShoppingCart size={32} className="carrinho" /></button></a>
                </div>
                <br />
            </Peltier_Modal>
            <Rele_Modal isOpen={openRele_Modal} setRele_ModalOpen={() => setRele_ModalOpen(!openRele_Modal)}>
                <div className="modalsls">
                <h2 className="h2modal">Módulos relé</h2>
                <img src={rele} alt="" className="imgmodals"/>
                <p>O módulo relé 1 canal funciona com tensão de 5 V, e pode acionar cargas de até 250 VAC ou 30 VDC, suportando uma corrente máxima de 10 A. Possui led indicador de energia, 2 pinos de energia e 1 de controle, além do borne de saída com parafusos, facilitando a conexão dos equipamentos.</p>
                <br />
                <a href="https://www.eletrogate.com/modulo-rele-2-canais-5v-10a-com-borne-kr" className="amodals"><button>Compre Aqui <ShoppingCart size={32} className="carrinho" /></button></a>
                </div>
                <br />
            </Rele_Modal>
            <P4kre_Modal isOpen={openP4kre_Modal} setP4kre_ModalOpen={() => setP4kre_ModalOpen(!openP4kre_Modal)}>
                <div className="modalsls">
                <h2 className="h2modal">Adaptador P4/KRE</h2>
                <img src={p4kre} alt="" className="imgmodals"/>
                <p>Este conector é usado para ligar a alimentação das câmeras de segurança CFTV. Produto com excelente qualidade profissional e de fácil instalação: Não precisa soldar, pois ele tem parafusos que facilitam a fixação do cabo bastando ter uma chave Philips para poder prendê-los.</p>
                <br />
                <a href="https://www.eletrogate.com/conector-adaptador-plug-p4-femea-com-borne" className="amodals"><button>Compre Aqui <ShoppingCart size={32} className="carrinho" /></button></a>
                </div>
                <br />
            </P4kre_Modal>

            <Fonte_Modal isOpen={openFonte_Modal} setFonte_ModalOpen={() => setFonte_ModalOpen(!openFonte_Modal)}>
                <div className="modalsls">
                <h2 className="h2modal">Fonte bivolt</h2>
                <img src={fonte_bivolt} alt="" className="imgmodals"/>
                <p>O sistema bivolt é uma característica que dá aos equipamentos eletrônicos a possibilidade de ligá-los tanto em uma rede de 110V quanto em uma de 220V, sem o risco de comprometer a integridade dos aparelhos.</p>
                <br />
                <a href="https://produto.mercadolivre.com.br/MLB-2831517951-fonte-12v-1a-bivolt-pcftv-fita-barra-de-led-_JM#is_advertising=true&position=2&search_layout=stack&type=pad&tracking_id=05f01d85-065d-472c-bbb0-0bfdc220ca83&is_advertising=true&ad_domain=VQCATCORE_LST&ad_position=2&ad_click_id=NzlkNmM3NDYtNTI1OC00OTU0LTkyMzItNDk0NzU4YjUwMzQ1" className="amodals"><button>Compre Aqui <ShoppingCart size={32} className="carrinho" /></button></a>
                </div>
                <br />
            </Fonte_Modal>
            <Interruptor_Modal isOpen={openInterruptor_Modal} setInterruptor_ModalOpen={() => setInterruptor_ModalOpen(!openInterruptor_Modal)}>
                <div className="modalsls">
                <h2 className="h2modal">Chave Gangorra</h2>
                <img src={interruptor} alt="" className="imgmodals"/>
                <p>O interruptor é um dispositivo simples criado pelo médico Golding Bird, aproximadamente na década de 1840, utilizado na abertura de circuitos elétricos em redes, tomadas e entradas de aparelhos eletrônicos, basicamente na maioria das situações que envolvem o ligamento ou desligamento de energia elétrica.</p>
                <br />
                <a href="https://www.eletrogate.com/chave-gangorra-com-2-terminais" className="amodals"><button>Compre Aqui <ShoppingCart size={32} className="carrinho" /></button></a>
                </div>
                <br />
            </Interruptor_Modal>
            <Display_Modal isOpen={openDisplay_Modal} setDisplay_ModalOpen={() => setDisplay_ModalOpen(!openDisplay_Modal)}>
                <div className="modalsls">
                <h2 className="h2modal">Display lcd i2c</h2>
                <img src={displayLCD} alt="" className="imgmodals"/>
                <p>O display 16×2 serve para facilitar a conexão de uma interface homem-máquina (IHM). Basicamente ele funciona para exibir caracteres, letras e números de forma nítida e clara, que expõe informações relevantes para o programador.</p>
                <br />
                <a href="https://www.eletrogate.com/display-lcd-16x2-i2c-backlight-azul?utm_source=Site&utm_medium=GoogleMerchant&utm_campaign=GoogleMerchant" className="amodals"><button>Compre Aqui <ShoppingCart size={32} className="carrinho" /></button></a>
                </div>
                <br />
            </Display_Modal>
            <Botao_Modal isOpen={openBotao_Modal} setBotao_ModalOpen={() => setBotao_ModalOpen(!openBotao_Modal)}>
                <div className="modalsls">
                <h2 className="h2modal">Botão</h2>
                <img src={botao} alt="" className="imgmodals"/>
                <p>Através do botão podemos acionar as entradas digitais e fazer com que ao receber esta informação um comando de programação possa ser executado.</p>
                <br />
                <a href="https://www.eletrogate.com/push-button-chave-tactil-12x12x43mm" className="amodals"><button>Compre Aqui <ShoppingCart size={32} className="carrinho" /></button></a>
                </div>
                <br />
            </Botao_Modal>
        </section>
        <br />
    </main>
    </>
    )
  }
  
  export default Equipamento