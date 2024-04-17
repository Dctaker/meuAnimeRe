import Header from './componente/layout/Header/Header'
import './App.module.css'
import Main from './pages/main'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Error404 from './pages/Error404'

function App() {


  return (
    <>
      <Header/>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Main/>}/>
              <Route path="*" element={<Error404/>}/>
          </Routes>
      </BrowserRouter>
      
  
    </>
  )
}

export default App
