import style from './destaqueCard.module.css'
import { FiChevronRight, FiChevronLeft  } from "react-icons/fi";


const DestaqueCard = (props)=>{

    return(
        <>
          <section className={style.containerCard}>
                <img src={props.img} alt={props.nome}/>
                <p>{props.nome}</p>
                <div>Novo</div>
          </section>
        </>
    )
}


export default DestaqueCard 
