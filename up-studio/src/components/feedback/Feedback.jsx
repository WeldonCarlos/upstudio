import './feedback.css'

function Feedback() {
    return (
        <div>

            <section className='section__feedback' >
                <div className='titulo__opiniao__dos__clientes'>
                    <h2>
                        A opinião de nossos clientes
                    </h2>
                </div>

                <div className='conteiner__abraçando__conteudoFedback'>

                    <div><img className='imagem__cliente' src={""} alt="Imagem de usuario" /></div>
                    <h3 className='nome__do__usario'>Amanda</h3>
                    <p className='feedback' > It is a long established fact that a reader will be distracted by the
                    </p>


                </div>
            </section>

        </div>
    )
}

export default Feedback
