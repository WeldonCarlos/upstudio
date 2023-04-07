
import './Arquitetura-css/abaixo-do-carrocel.css'
import './Arquitetura-css/adquira-seu-app.css'
import './Arquitetura-css/ter-um-app.css'
import './Arquitetura-css/vem-ser-up.css'
import './Arquitetura-css/video-exemplo.css'
import '../home/home.css'
import Carrocel from '../../components/carrocel/Carrocel'
import Feedback from '../../components/feedback/Feedback'
import SiteImobiliario from '../../Assets/img/SiteImobiliario.jpg'
import MocaPerguntando from '../../Assets/img/sorry.png'
import FotoCliente from '../../Assets/img/fotocliente.jpg'
import Botao from '../../components/botao/Botao'

function Home() {

  return (

    <div>
     
      <div className='texto__boas__vindas'>
        <h2 className='bem__vindos'>BEM VINDO AO UP STUDIO</h2>
        <h2 className='inovacao__digital'>AGÊNCIA DE INOVAÇÃO DIGITAL </h2>
      </div>

      <Carrocel />

      <div className='section__depois__carrocel'>
        <div className='container__texto__e__button'>
          <h2 className='texto__section__depois___carrocel'>
            Aplicativos  <strong>web</strong>  e <strong>mobile</strong>  com maior <br />
            eficiência de segurança e <br /> acessibilidade.
          </h2>

          <Botao/>
        </div>
        <div>
          <img className='makup__imobiliaria' src={SiteImobiliario} alt="Modelo de makup para site imobiliario" />

        </div>
      </div>


      <div className='conteiner__pai__porque__appweb'>
        <div className='conteudo__textos__button'>
          <h2 className='titulo__porque__ter__app'>
            Por que  ter <br /> um
            aplicativo <strong>web?</strong>
          </h2>
          <h3 className='descricao__ter__app'>
            Você com certeza tem pelo menos um aplicativo instalado no seu smartphone.
            Mas, você sabia que existe uma diferença entre Aplicativo e Web App?
          </h3>

          <button className='botao__porque__ter__app'>Continuar lendo...</button>
        </div>

        <img className='imagem__moca__porque__ter__app' src={MocaPerguntando} alt="Imagem de uma moça Afro com expressão de perguntar alguma coisa" />
      </div>


      <section className='section__video'>
        <div className='video__explicativo'>
          <iframe className='alterar__tamanho__do__video__explicativo' width="100%" height="170" src="https://www.youtube.com/embed/BxsfmCf5ank" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
        </div>
        <div className='textos__seguro__eficiente__moderno'>
          <h3 className='texto__abaixo__do__video'>
            SEGURO  &gt; &gt; EFICIÊNTE  &gt; &gt; MODERNO
          </h3>
        </div>
      </section>

      <Feedback/>
      

        <button className=' botao__feedback'>
          MAIS FEEDBACK
        </button>



      <div className='adquira__seu__app'>

        <h2>
          ADQUIRA SEU APLICATIVO <strong>WEB</strong>  OU <strong>MOBILE</strong>
        </h2>

        <button className=' botao__feedback  adquerir--app'>
          FALAR COM ATENDENTE AGORA
        </button>
      </div>

      <div className='vem__ser__up'>
        <h3 className='vem'>#<strong>V</strong>EM</h3>
        <h3 className='ser'><strong>S</strong>ER</h3>
        <h3 className='up'><strong>U</strong>P</h3>
      </div>


    </div>





  )
}





export default Home
