
import { Outlet } from 'react-router-dom';
import './App.css';
import Topo from './components/navbar/Topo';
import Carrocel from './components/carrocel/Carrocel';


function App() {
  
  return (
    <div className="App">
      <Topo/>
   
        <div className='container'>
          <Outlet/>
        </div>
    </div>
  )
}

export default App
