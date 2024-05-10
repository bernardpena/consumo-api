import './App.css'
import MiApi from './components/MiApi'
import Buscador from './components/Buscador'

function App() {


  return (
    <div className="container-fluid">
      <h2 className='text-center' >Farmacias de Turno</h2>
      <Buscador />
      <MiApi />
    </div>
  )
}

export default App
