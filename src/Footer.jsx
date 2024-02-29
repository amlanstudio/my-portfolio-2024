import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import logoAml from './img/amlan-light.png';
import linkedin from './img/linkedin-light.png';
import instagram from './img/instagram-light.png';

export default function Footer(){
    return(
        <div className="foot">
            <div className="gauche">
                {/* <Link to="/"><img className="logo" src={logoAml}/></Link> */}
            <a href="#bonjour"><img className="logo" src={logoAml}/></a>
            </div>
            <div className="droite">
                <div className="citation-footer">
                    <p>Ville de feu et de lumière, Lyon me tend les bras.<br/>Rugissante de caractère, j'approche à grand pas.</p>
                </div>
                <div className="reseaux">
                        <p>Retrouvez moi sur </p>
                        <a className="linkedin" href="https://www.linkedin.com/in/sarah-n-gotta-lagane-838143178/" target="_blank"><img src={linkedin} /></a>
                        <p> et </p>
                        <a  className="instagram" href="https://www.instagram.com/amlan_studio/" target="_blank"><img src={instagram} /></a>
                        <p> ! </p>
                </div>
                <div className="mentions-legales">
                    <p>© 2024 - Sarah N'GOTTA-LAGANE. Tous droits réservés.</p>
                </div>
            </div>
        </div>
    )
}