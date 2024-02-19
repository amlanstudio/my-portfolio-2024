import sarah from './img/sarah.png';
import eye from './img/eye.png';

const PresentationPage = () => {
    return(
        <div className="home-presentation">
            <img src={sarah} alt=""/>
            <div className="home-presentation-informations">
                <div className="home-presentation-text">
                    <h2>Bonjour ! </h2>
                    <p>Je suis <strong>Sarah N'GOTTA-LAGANE</strong>, j'ai 24 ans et je viens du Sud-Ouest de la France. En Octobre 2024, je serai ingénieure diplômée de l'ESIEE Paris dans la formation IMAC (Image Multimédia Audiovisuel Communication), la seule école d'ingénieurs qui combine l'art et la science.</p>
                </div>
                <div className="home-presentation-button">
                    <button>Réalisations</button>
                    <button>Contact</button>
                    <a download="img/cv.pdf"><button>Télécharger mon CV</button></a>
                </div>
            </div>
            <h3>Qui suis-je ?</h3>
            <h3>Parcours Scolaire</h3>
            <h3>Expériences</h3>
            <h3>Certifications</h3>
        </div>

    );
}

export default PresentationPage;