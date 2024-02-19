import { Link } from "react-router-dom";
import logoAml from './img/amlan.png';
import linkedin from './img/linkedin.png';
import instagram from './img/instagram.png';

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/"><img className="logo" src={logoAml}/></Link>
            <Link to="/"><h1>Sarah N'GOTTA-LAGANE</h1></Link>
            <div className="links">
                {/* <Link to="/">Accueil</Link> */}
                <Link to="/PresentationPage">Qui suis-je ?</Link>
                {/* <Link to="/RealisationsPage">My realisations</Link> */}
                <Link to="/RealisationsPage">Réalisations</Link>
                <Link to="#">Contact</Link>
            </div>
            <div className="social">
                <a className="linkedin" href="https://www.linkedin.com/in/sarah-n-gotta-lagane-838143178/" target="_blank"><img src={linkedin} /></a>
                <a  className="instagram" href="https://www.instagram.com/amlan_studio/" target="_blank"><img src={instagram} /></a>
            </div>
        </nav>
    );
}
 
export default Navbar;