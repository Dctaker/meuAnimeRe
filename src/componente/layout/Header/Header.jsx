import style from './header.module.css'
import { FiSearch } from "react-icons/fi";
import { FiMenu,FiCalendar,FiX,FiHeart } from "react-icons/fi";
import logo from './logo.png'
import {useState, useEffect} from 'react'



const Header = ()=>{

    const [textInput, setTextInput] = useState('')
    const [menu, setMenu] = useState(false)
    const [inputMobile, setInputMobile] = useState(false)
    const [ info, setInfo] = useState({})
    const api = 'https://kitsu.io/api/edge/'
    

    {/** Aqui nesse UseEffect efetuamos a chamada da Api
        O State que contem o input pega o que o usuario digitou e coloca como busca na Api
    */}
    useEffect(()=>{
        if(textInput){
            fetch(`${api}anime?filter[text]=${textInput}&page[limit]=12`)
           .then((resp) => resp.json())
           .then((resp) =>{
            setInfo(resp)
            console.log(resp)
           })
                
        }
    },[textInput])

    function showMenu(){
        setMenu(!menu)
    }

    function showInput(){
        setInputMobile(!inputMobile)
    }

    return(
        <>
            {/**Essa parte é fixa do header e sempre vai ser exibida */}
            <header className={style.containerHeader}>
               <div className={style.logo}>
                    <img src={logo}alt='Logo'/>
               </div>
               <nav className={style.headerMenu}>
                    <ul>
                        <li>Inicio</li>
                        <li>Lista de Anime</li>
                        <li>Calendario</li>
                        <li>Favoritos</li>
                    </ul>
               </nav>
               <div className={style.containerIconBuscar}> 
                    <FiSearch onClick={showInput}  className={style.iconBuscar} size={30}/>
               </div>
               <FiMenu onClick={showMenu} className={style.iconMenu} size={30} />
            </header>

        {/* Aqui dentro é o menu mobile, que so vai ser exibido se o state for true
        */ }
          {menu && 
            <section  className={style.menuMobile}>
                <FiX  onClick={showMenu} size={30} className={style.closeMenu}/>
                <ul>
                    <li>Inicio</li>
                    <li>Lista de Anime</li>
                    <li>Calendario</li>
                    <li>Favoritos</li>
                </ul>
            </section>
          }

          {/* Ele so vai aparecer depois que a Api for chamada*/}
          {inputMobile && 
             <section className={style.containerInputBuscar}> 
                    <article>
                    <   input value={textInput} onChange={(e)=> setTextInput(e.target.value)} placeholder='Digite o nome de um anime' className={style.inputBuscar}/>
                        <FiX onClick={showInput} size={30} className={style.closeInputBuscar}/>
                        
                    </article>

                    <article className={style.animeResultado}>
                        {info.data && 
                            <ul>
                                {
                                    info.data.map((anime)=> (
                                        <li key={anime.id}>
                                            <img src={anime.attributes.posterImage.small} alt={anime.attributes.canonicalTitle}/>
                                           <p>{anime.attributes.canonicalTitle}</p>
                                        </li>
                                    ))
                                }
                            </ul>
                        }
                    </article>
              </section>
          }
           
            
        </>
    )
}

export default Header