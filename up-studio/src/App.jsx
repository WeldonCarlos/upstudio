
import { Outlet } from 'react-router-dom';
import './App.css';
import Topo from './components/navbar/Topo';
import Footer from './components/footer/Footer';



function App() {
  
  return (
    <div className="App">
         <Topo />
        <div className='container'>
          <Outlet/>
        </div>
        <Footer/>
    </div>
  )
}

export default App
