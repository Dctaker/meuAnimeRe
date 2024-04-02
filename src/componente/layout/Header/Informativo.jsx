import style from './informativo.module.css'
import { FiX } from "react-icons/fi";
import { useState } from 'react';

const Informativo = ()=>{

    const [info, setInfo] = useState(true)
    function closeInfo(){
        setInfo(!info)
    }

    return (
        <>
            {info && 
                <section className={style.ContainerInformativo}>
                    <FiX  size={25} onClick={closeInfo} className={style.closeInfo}/>
                    <article className={style.infoA}>
                        <p>Avisos importantes</p>
                    </article>

                    <article className={style.infoB}>
                        <p>NOTA - Recomendo a usarem o navegador google chrome para assistir ele é o mais compatível com o nosso site!!!</p>
                        <div>
                            <p>- Salvem o site nos favoritos</p>
                            <p>- DOWNLOADS FUNCIONANDO NORMALMENTE!!!</p>
                            <p>- Para aqueles que tiverem problemas no player usem o navegador Microsoft Edge!!</p>
                            <p>- Eu sei que é chato esse cheking de ip porém n posso tirar por enquanto galera não até os ataques acabarem!! isso vai nos deixar mais fortes ainda do que ja somos! amo vcs tropa</p>
                        </div>
                    </article>
                </section>
                
            }
            
        </>
    )
}

export default Informativo