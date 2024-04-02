import styled from './container.module.css'
import Card from './card/Card'
import {useEffect, useState} from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'



const Container = ()=>{

    const [pag, setPages] = useState(8)

    useEffect(()=>{

        function handleResize(){
        if(window.innerWidth < 1150 && window.innerWidth > 930){
            setPages(4)
        }
        else if (window.innerWidth < 930 && window.innerWidth > 720){
            setPages(3)
        }

        else if (window.innerWidth < 720 && window.innerWidth > 450){
            setPages(2)
        }
       else{
        setPages(8)
       }
    }
        window.addEventListener('resize', handleResize)
        handleResize()
            return ()=>{
                window.removeEventListener('resize', handleResize)
            }   
    },[])

    return(
        <>
            <section className={styled.container}> 
                <article className={styled.parteA}>
                    <p>Ultimos Lançamentos</p>
                </article>
                <article className={styled.parteB}>
                   <Swiper 
                   slidesPerView={pag}
                   navigation
                   >
                        <SwiperSlide>
                            <Card/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card/>
                        </SwiperSlide>

                        <SwiperSlide>
                            <Card/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card/>
                        </SwiperSlide>
                   </Swiper>
                </article>
            </section>
        </>
    )
}




export default Container