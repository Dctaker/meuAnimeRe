import Informativo from '../componente/layout/Header/Informativo'
import Destaque from '../componente/layout/destaques/Destaque'
import Container from '../componente/layout/containerLista/Container'
import UltimoAdicionados from '../componente/layout/UltimosAdicionados/UltimoAdicionados'
import Top from '../componente/layout/top/Top'


function Main (){
    return(
        <>
            <Informativo/>
            <Destaque/>
            <Container/>
            <UltimoAdicionados/>
            <Top/>
        </>
    )
}

export default Main