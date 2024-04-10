import Header from './componente/layout/Header/Header'
import './App.module.css'
import Informativo from './componente/layout/Header/Informativo'
import Destaque from './componente/layout/destaques/Destaque'
import Container from './componente/layout/containerLista/Container'
import UltimoAdicionados from './componente/layout/UltimosAdicionados/UltimoAdicionados'

function App() {


  return (
    <>
      <Header/>
      <Informativo/>
      <Destaque/>
      <Container/>
      <UltimoAdicionados/>
     
    </>
  )
}

export default App
