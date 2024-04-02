import style from './destaque.module.css'
import DestaqueCard from './DestaqueCard'
import hanayome from './img/hanayome small.png'
import kaguya from './img/Kaguya small.png'
import pokemon from './img/pokemon-2019 small.png'
import konosubaa from './img/konosuba 1 small.png'
import nagatoro from './img/nagatoro 1 small.png'
import hige from './img/higewoSoru 1 small.png'
import kanojo from './img/kanojo.png'
import sakura from './img/sakuraSou 1 small.png'
import {useState, useEffect} from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'

const Destaque = ()=>{

    
    const [pag, setPage] = useState(window.innerWidth)
    const[exi,setExi] = useState(false)
    const[slidePeView, setSliderPorPag] = useState(8)

    function handle(){
        setPage((prevWidth) => {
            // Use prevWidth para garantir que estamos usando o valor mais recente
            if (prevWidth < 1150) {
              setExi(true);
            } else {
              setExi(false);
            }
            return window.innerWidth; // Atualize pag com o novo valor
          });
    }



{/* Esse Bloco serve para monitorar as alterações do evento resize e alterar a quantidade de elementos em Destaque*/}
    useEffect(()=>{

        function handleResize(){
        if(window.innerWidth < 1150 && window.innerWidth > 930){
            setSliderPorPag(4)
        }
        else if (window.innerWidth < 930 && window.innerWidth > 720){
            setSliderPorPag(3)
        }

        else if (window.innerWidth < 720 && window.innerWidth > 450){
            setSliderPorPag(2)
        }
       else{
        setSliderPorPag(8)
       }
    }
        window.addEventListener('resize', handle)
            handle()
            return ()=>{
                window.removeEventListener('resize', handle)
            }   
    },[])

    useEffect(()=>{
        function handleResize(){
            if(window.innerWidth < 1150 && window.innerWidth > 1100){
                setSliderPorPag(5)
            }
            else if (window.innerWidth < 1100 && window.innerWidth > 850){
                setSliderPorPag(4)
            }
            else if (window.innerWidth < 848 && window.innerWidth > 625){
                setSliderPorPag(3)
            }
            else if (window.innerWidth < 625){
                setSliderPorPag(2)
            }
        }

        window.addEventListener('resize', handleResize)
        handle()
        return ()=>{
            window.removeEventListener('resize', handleResize)
        }

    },[])

    return(
        <>
            <section className={style.containerDestaque}>
                <article className={style.destaqueA}>
                    <p>Lançamentos</p>
                </article>
                {
                    exi ===false ? 
                    <article className={style.destaqueB}>
                        <DestaqueCard img={hanayome} nome="Hanayome"/>
                        <DestaqueCard img={kaguya} nome="Kaguya Sama"/>
                        <DestaqueCard img={pokemon} nome="Pokemon"/>
                        <DestaqueCard img={konosubaa} nome="konosuba"/>
                        <DestaqueCard img={nagatoro} nome="Nagatoro"/>
                        <DestaqueCard img={hige} nome="HigewoSoru"/>
                        <DestaqueCard img={kanojo} nome="Kanojo mo Kanojo"/>
                        <DestaqueCard img={sakura} nome="SakuraSou"/>
                    </article>
                    :null
                }

                {exi && 
                <article className={style.destaqueB}>
                    <Swiper 
                     slidesPerView={slidePeView}
                     navigation
                    >
                        <SwiperSlide>
                            <DestaqueCard img={hanayome} nome="Hanayome"/>
                        </SwiperSlide>
                        <SwiperSlide>
                         <DestaqueCard img={kaguya} nome="Kaguya Sama"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <DestaqueCard img={pokemon} nome="Pokemon"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <DestaqueCard img={konosubaa} nome="konosuba"/>
                        </SwiperSlide>
                        <SwiperSlide>
                             <DestaqueCard img={nagatoro} nome="Nagatoro"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <DestaqueCard img={hige} nome="HigewoSoru"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <DestaqueCard img={kanojo} nome="Kanojo mo Kanojo"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <DestaqueCard img={sakura} nome="SakuraSou"/>   
                        </SwiperSlide>                        
                    </Swiper>    

                 </article>
                }
                
            </section>
        
        </>
    )
}

export default Destaque