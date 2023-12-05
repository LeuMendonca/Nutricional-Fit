import { BrowserRouter, Route, Routes } from 'react-router-dom'
import '../src/App.css'
import Nav from './Componentes/Layout/Nav'
import Cadastro from './Componentes/Pages/Cadastro'
import Home from './Componentes/Pages/Home'


function App() {
  return (
    <BrowserRouter>
      <Nav />

        <div className="container">
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/Cadastro' element={<Cadastro />}></Route>
          </Routes>

        </div>

    </BrowserRouter>
  )
}

export default App
