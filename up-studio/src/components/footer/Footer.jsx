import LogoRodape from '../../assets/img/up_studio.png'
import './footer.css'

function Footer() {
    return (
        <div>

            <footer className='container__rodape'>

                <img className='logo__rodape' src={LogoRodape} alt="Logo da Up Studo de cor laranja" />
                <p className='copy__right'>
                    © Copyright Up Studio Agência digital
                </p>

            </footer>

        </div>
    )
}

export default Footer
