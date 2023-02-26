import {BrowserRouter,Route, Routes}  from 'react-router-dom'
import { LoginPage } from './pages/loginPage'
import './App.css'
import { RegisterPage } from './pages/registerPage'
import NavBar from './components/NavBar'

function App() {
  return (
    <>
      <div className="App">
       <BrowserRouter>
        <Routes>
        <Route path='/login' element={ <LoginPage/> }/>
        <Route path='/register' element={ <RegisterPage/> }/>
        </Routes>
       </BrowserRouter>
      </div>
    </>
  )
}

export default App
