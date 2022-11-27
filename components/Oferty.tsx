import React from 'react'

//Icons
import {BsFillCameraVideoFill} from 'react-icons/bs'
import {MdDesignServices} from 'react-icons/md'
import {TbWorld} from 'react-icons/tb'

//My components
import OfertyCard from './OfertyCard'

const Oferty = () => {
  return (
    <div className="Oferty">
        <OfertyCard 
            title="Grafiki" 
            description={"Jestem w stanie przygotować dla ciebie wszelkie materialy reklamowe, w których będziesz mial istotny wplyw."} 
            icon={<MdDesignServices size={25}/>}
        />
        <OfertyCard 
            title="Strony internetowe" 
            description={"Mam za sobą sporo ciekawych projektów, z czego kazdy klient byl zadowolony, tworzę strony od Wordpressa po Reacta"} 
            icon={<TbWorld size={25}/>}
        />
        <OfertyCard 
            title="Strony internetowe" 
            description={"Mam za sobą sporo ciekawych projektów, z czego kazdy klient byl zadowolony, tworzę strony od Wordpressa po Reacta"} 
            icon={<TbWorld size={25}/>}
        />
    </div>
  )
}

export default Oferty