import React from 'react'

//Icons
import {BsFillCameraFill} from 'react-icons/bs'
import {MdDesignServices} from 'react-icons/md'
import {TbWorld} from 'react-icons/tb'
import {MdOndemandVideo} from 'react-icons/md'

//My components
import OfertyCard from './OfertyCard'

const Oferty = () => {
  return (
    <>
        <h1 style={{textAlign:"center", color:"#fff", marginBottom:"3rem"}}>Co mogę ci zaoferować?</h1>
        <div className="Oferty">
            <OfertyCard 
                title="Grafiki" 
                description={"Jestem w stanie przygotować dla ciebie wszelkie materialy reklamowe, w których będziesz mial istotny wplyw."} 
                icon={<MdDesignServices size={25}/>}
            />
            <OfertyCard 
                title="Strony internetowe" 
                description={"Mam za sobą sporo ciekawych projektów, z czego kazdy klient byl zadowolony, tworzę strony od Wordpressa po Reacta. Dodatkowo zaprojektuję wygląd oraz funkcjonalość strony."} 
                icon={<TbWorld size={25}/>}
            />
            <OfertyCard 
                title="Montaz filmów" 
                description={"Jestem autorem wielu filmów konkursowych, nie raz zajmowalem pierwsze miejsca. Mam tez na koncie filmy eventowe, niezaleznie od stylistyki filmu i tak wyjdzie mi świetnie."} 
                icon={<MdOndemandVideo size={25}/>}
            />
            <OfertyCard 
                title="Obsluga wideo/foto" 
                description={"Mam za sobą wiele projektów filmowych jak sesji zdjęciowych. Czy to jako operator gdy zajmowalem pierwsze miejsce w konkursie wojewódzkim, czy jako fotograf robiąc sesje rodzinne."} 
                icon={<BsFillCameraFill size={25}/>}
            />
        </div>
    </>
  )
}

export default Oferty