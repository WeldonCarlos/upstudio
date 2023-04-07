import './botao.css'
import { Link } from 'react-router-dom'

function Botao() {
    return (
        <div>
           <Link to="/servicos">
            <button  className='botao__section__depois__carrocel'>
                SAIBA MAIS
            </button>
            </Link>
        </div>
    )
}

export default Botao
