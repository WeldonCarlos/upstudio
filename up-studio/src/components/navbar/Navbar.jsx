import { Link } from "react-router-dom"

function Navbar() {
  return (
    <div>
     
      <ul>
        <li><Link to={`/`} >Home</Link> </li>
        <li><Link to={`/Sobre`} >Sobre</Link> </li>
        <li><Link to={`/Servicos`} >Serviços</Link> </li>
        <li><Link to={`/Portifolio`} >Portifolio</Link> </li>
        <li><Link to={`/Contato`} >Contato</Link> </li>
      </ul>
    </div>
  )
}

export default Navbar
