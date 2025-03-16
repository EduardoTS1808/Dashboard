import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './pages/Header/header'
import Dashboard from './pages/Dashboard/dashboard'
import Hist from './pages/History/history'
import Form from './pages/Form/form'

export default function App() {

  return (

    <>
     <Router>
     <Routes>
    <Route path='/' element={    <Header/>} />
    <Route path='/Dashboard' element={    <Dashboard/>} />
    <Route path='/Novo' element={    <Form/>} />
    <Route path='/Historico' element={    <Hist/>} />


    {/* <Route path='/listagem' element={ <Listagem ListaCandidatos={this.state.candidatos} delete={this.removerCandidato} />}/> */}
  </Routes>
    </Router>
      
       
    </>
  )
}


