import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { LoginPage } from './pages/loginPage'
import './App.css'
import { RegisterPage } from './pages/registerPage'
import NavBar from './components/NavBar'
import HomePages from './pages/HomePages'

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/home" element={<HomePages />} />
            <Route path="/" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
