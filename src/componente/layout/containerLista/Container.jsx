import styled from './container.module.css'
import Card from './card/Card'
import {useEffect, useState} from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'

import card1 from './card/ultimos adicionados/boruto small.png'
import card2 from './card/ultimos adicionados/dragon sup small.png'
import card3 from './card/ultimos adicionados/hanayoome small.png'
import card4 from './card/ultimos adicionados/juju small.png'
import card6 from './card/ultimos adicionados/kimi small.png'
import card7 from './card/ultimos adicionados/naruto small.png'
import card8 from './card/ultimos adicionados/sword art on  small.png'
import card9 from './card/ultimos adicionados/toradora small.png'
import card10 from './card/ultimos adicionados/sword art small.png'



const Container = ()=>{

    

  
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
                            <Card img={card9}/>
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




export default Container