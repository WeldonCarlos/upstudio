import { Link } from "react-router-dom"
import Logo from "../../assets/img/up_studio.png"
import Menuburguer from "../../assets/img/menuburguer.png"
import './topo.css'




function Topo() {
    return (

        <div className="conteiner__pai">

           
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand " href="#"> <img className="logo__topo" src={Logo} /></a>
                    <button className="navbar-toggler alterar--tracos--hamburguer" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/" className="nav-link active" aria-current="page">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/sobre">Sobre</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/portifolio">Portifólio</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/servicos" >Serviços</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contato" >Contato</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>

    )
}

export default Topo;