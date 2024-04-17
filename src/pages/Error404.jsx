import {Link} from 'react-router-dom'
import styled from  './css/Error.module.css'
import { FiWifiOff } from "react-icons/fi";


function Error404(){
    return(
        <div className={styled.container}>     
            <span><FiWifiOff  size={80}/></span>
            <p>Erro ao tentar localizar a pagina, talvez essa pagina não exista</p>
            <Link className={styled.link} to="/" >Retornar a Pagina principal</Link>
        </div>
    )
}

export default Error404