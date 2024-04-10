import styled from './container.module.css'
import Card from './card/Card'
import {Swiper, SwiperSlide} from 'swiper/react'

import card1 from '../containerLista/card/ultimos adicionados/boruto small.png'
import card2 from '../containerLista/card/ultimos adicionados/dragon small.png'
import card3 from '../containerLista/card/ultimos adicionados/dragon sup small.png'
import card4 from '../containerLista/card/ultimos adicionados/hanayoome small.png'
import card6 from '../containerLista/card/ultimos adicionados/juju small.png'
import card7 from '../containerLista/card/ultimos adicionados/kimi small.png'
import card8 from '../containerLista/card/ultimos adicionados/naruto small.png'
import card10 from '../containerLista/card/ultimos adicionados/toradora small.png'



const UltimoAdicionados = ()=>{

    
    return(
        <>
            <section className={styled.container}> 
                <article className={styled.parteA}>
                    <p className={styled.episodio}>Ultimos Lançamentos</p>
                </article>


                <article className={styled.parteB}>
                   <Swiper 
                   slidesPerView={5}
                   navigation
                   >
                        <SwiperSlide>
                            <Card img={card1}/>
                        </SwiperSlide>

                        <SwiperSlide>
                            <Card img={card2}/>
                        </SwiperSlide>

                        <SwiperSlide>
                             <Card img={card3}/>
                        </SwiperSlide>

                        <SwiperSlide>
                             <Card img={card4}/>
                        </SwiperSlide>

                        <SwiperSlide>
                            <Card img={card6}/>
                        </SwiperSlide>

                        <SwiperSlide>
                         <Card img={card7}/>
                        </SwiperSlide>

                        <SwiperSlide>
                             <Card img={card8}/>
                        </SwiperSlide>


                    

                        <SwiperSlide>
                             <Card img={card10}/>
                        </SwiperSlide>

                   </Swiper>
                </article>


            </section>
        </>
    )
}




export default UltimoAdicionados