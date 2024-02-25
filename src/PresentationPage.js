import sarah from './img/sarah.png';
import eye from './img/eye.png';
import Presentation from './Presentation';
import ContactPage from './ContactPage';
import { Link } from 'react-router-dom';

const PresentationPage = () => {

    const handleDownload = () => {
        // URL de votre fichier PDF
        const pdfUrl = './img/cv.pdf';
        
        // Création d'un élément <a> pour démarrer le téléchargement
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = 'cv.pdf'; // Nom du fichier lors du téléchargement
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return(
        <div className="page">
            <div className="home-presentation">
                        <div className="container">
                            <div className="layout-home">
                                <img src={sarah} alt=""/>
                                <div className="home-presentation-informations">
                                    <div className="home-presentation-text">
                                        <h2>Moi, c'est Sarah ! </h2>
                                        <p>J'ai 24 ans et je viens du Sud-Ouest de la France. En Octobre 2024, je serai ingénieure diplômée de l'ESIEE Paris dans la formation IMAC (Image Multimédia Audiovisuel Communication), la seule école d'ingénieurs qui combine l'art et la science.</p>
                                    </div>
                                    <div className="home-presentation-button">
                                    <Link to="/RealisationsPage"><button>Réalisations</button></Link>
                                    <button onClick={handleDownload}>Télécharger mon CV</button>      
                                    <Link to="/ContactPage"><button> Me contacter !</button></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
            </div>
                    <div className="parcours-vie">
                        <div className="container">
                            <div className="parcours-scolaire">
                                <h3>Qui suis-je ?</h3>
                                <div className="graphics">
                                    <div className="passions">
                                        <h4>Passions</h4>
                                        <ul>
                                            <li>Humanitaire</li>
                                            <li>Animatrice colonie de vacances</li>
                                            <li>Concerts et festivals</li>
                                            <li>Séries y films</li>
                                        </ul>
                                        <p>Boire du thé, cuisiner, voyager, chanter sous la douche, faire du sport (volleyball) et profiter des moments en famille.</p>

                                    </div>

                                    <div className="savoir-etre">
                                        <h4>Savoir-être</h4>
                                        <table>
                                            <tr>
                                            <th>nom</th>
                                            <th>points</th>
                                            </tr>
                                            <tr>
                                            <th>esprit d'équipe</th>
                                            <th>5/5</th>
                                            </tr>
                                            <tr>
                                            <th>créativité</th>
                                            <th>4/5</th>
                                            </tr>
                                            <tr>
                                            <th>polyvalence</th>
                                            <th>5/5</th>
                                            </tr>
                                            <tr>
                                            <th>autonomie</th>
                                            <th>4/5</th>
                                            </tr>
                                            <tr>
                                            <th>leadership</th>
                                            <th>3/5</th>
                                            </tr>
                                        </table>

                                    </div>

                                    <div className="savoir-faire">
                                        <h4>Langues</h4>

                                    </div>

                                </div>
                            </div>
                            <div className="qui-suis-je">
                                <h3>Parcours Scolaire</h3>
                            </div>
                            <div className="expériences">
                                <h3>Expériences</h3>
                            </div>
                            <div className="certifications">
                                <h3>Certifications</h3>
                            </div>
                        </div>
                    </div>
        </div>
        
                  
    );
}

export default PresentationPage;