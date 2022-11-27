import {MdEmail} from 'react-icons/md'

const Hero = () =>{
    return(
        <div className="Hero">
            <h1>Cześć, jestem Dominik</h1>
            <p>potrafię sporo rzeczy, a ty mozesz na tym skorzystać.</p>
            <a href="/kontkat">Kontakt <MdEmail/></a>
        </div>
    )
}

export default Hero