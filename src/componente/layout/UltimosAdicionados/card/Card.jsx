
import styled from './card.module.css'



const Card = (props)=>{


    return(
        <>
            <section className={styled.container}>
               <article>
                    <img className={styled.imgCardItem} src={props.img} alt='imagem'/>
                    <p className={styled.episodio}>Nome do episodio </p>
               </article>
               
            </section>
        </>
    )
}

export default Card