import { Link } from "react-router-dom";
import sarah from './img/sarah.png';
import eye from './img/eye.png';


const Presentation = () => {
    return(
        <div className="home-presentation">
            <div className="container">
                <div className="layout-home">
                    <img src={sarah} alt=""/>
                    <div className="home-presentation-informations">
                        <div className="home-presentation-text">
                            <h2 id="bonjour">Bonjour ! </h2>
                            <p>Je suis <strong>Sarah N'GOTTA-LAGANE</strong>, j'ai 24 ans et je viens du Sud-Ouest de la France. En Octobre 2024, je serai ingénieure diplômée de l'ESIEE Paris dans la formation IMAC (Image Multimédia Audiovisuel Communication), la seule école d'ingénieurs qui combine l'art et la science.</p>
                        </div>
                        <div className="home-presentation-button">
                        <Link to="/PresentationPage"><button>En savoir plus !</button></Link>
                            <a href="#realisations"><button>Réalisations</button></a>
                            <a href="#contact"><button>Contact</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Presentation;