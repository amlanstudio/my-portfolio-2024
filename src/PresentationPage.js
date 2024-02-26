import sarah from './img/sarah.png';
import eye from './img/eye.png';
import Presentation from './Presentation';
import ContactPage from './ContactPage';
import { Link } from 'react-router-dom';
import Footer from './Footer';

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
                                    <div className="home-presentation-page-text">
                                        <h2>Moi, c'est Sarah ! </h2>
                                        <p>Des clubs sportifs aux ateliers dessins, du thé au café, je m’adonne à toutes les possibilités ! Peu importe le domaine, je me faufile, trouve ma place et m’adapte. Je suis un véritable couteau-suisse !<br/><br/>
Je suis actuellement en dernière année d'école d’ingénieur spécialisée en Image, Multimédia, Audiovisuel et Communication (IMAC), la seule filière qui allie Art et Science !<br/><br/></p>                                    </div>
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
                                    <h4>Savoir-être <br/><br/></h4>
                                        <div class="comp2">
                                            <p>Créativité</p>
                                            <p>85%</p>
                                            <div class="conteneur-barre2"><span class="barre c85"></span></div>
                                        </div>
                                        <div class="comp2">
                                            <p>Leadership</p>
                                            <p>70%</p>
                                            <div class="conteneur-barre2"><span class="barre c70"></span></div>
                                        </div>
                                        <div class="comp2">
                                            <p>Autonomie</p>
                                            <p>85%</p>
                                            <div class="conteneur-barre2"><span class="barre c85"></span></div>
                                        </div>
                                        <div class="comp2">
                                            <p>Polyvalence</p>
                                            <p>95%</p>
                                            <div class="conteneur-barre2"><span class="barre c95"></span></div>
                                        </div>
                                        <div class="comp2">
                                            <p>Esprit d'équipe</p>
                                            <p>95%</p>
                                            <div class="conteneur-barre2"><span class="barre c95"></span></div>
                                        </div>
                                    </div>

                                    <div className="savoir-faire">
                                        <h4>Langues</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="qui-suis-je">
                                <h3>Parcours Scolaire</h3>
                            </div>
                            <section className="expériences">
                                <h3>Expériences</h3>
                                        
                                <div class="exp">
                                    <div class="exp-info">
                                        <h4>Développeuse Web et Réalité Virtuelle</h4>
                                        <h5>Lab Solutec</h5>
                                        <h5>Février 2024 - Aujourd'hui</h5>
                                    </div>
                                    <div class="exp-desc">
                                        <ul>
                                            <li>Rédiger un cahier des charges et des spécifications fonctionnelles</li><br/>
                                            <li>Guide de style dynamique : Cataloguer l’ensemble des mouvements graphiques présents dans les e-learnings et noter les différentes intéractions et leurs utilités.</li><br/>
                                            <li>Concevoir et mettre en place un Product Backlog recensant les fonctionnalités à développer</li><br/>
                                            <li>Développer l’application en répondant aux besoins du sujet</li><br/>
                                            <li>Réaliser des tests fonctionnels et utilisateurs</li><br/>
                                            <li>Rédiger les documentations techniques et fonctionnelles de la solution</li><br/>
                                        </ul>
                                    </div>
                                </div>
                                <div class="exp">
                                    <div class="exp-info">
                                        <h4>Graphiste</h4>
                                        <h5>Airbus SAS | Training Center France</h5>
                                        <h5>Juin 2023 - Septembre 2023</h5>
                                    </div>
                                    <div class="exp-desc">
                                        <ul>
                                            <li>Création graphique : Créer des présentations, icônes et images de marque originales pour le service en respectant l’identité visuelle de Airbus</li><br/>
                                            <li>Guide de style dynamique : Cataloguer l’ensemble des mouvements graphiques présents dans les e-learnings et noter les différentes intéractions et leurs utilités</li><br/>
                                            <li>Google Sites : Créer un site internet original (Google Sites) pour la communication interne du service avec les autres services de l’entreprise</li><br/>
                                            <li>Étude de faisabilité : Réaliser une analyse de faisabilité du projet d’intégration d’une équipe graphique au sein du service. Ce projet, en collaboration avec les instructeurs maintenance inclue une évaluation pratique et théorique</li><br/>
                                        </ul>
                                    </div>
                                </div>
                                <div class="exp">
                                    <div class="exp-info">
                                        <h4>Chargée de communication</h4>
                                        <h5>Castres-Mazamet Technopole</h5>
                                        <h5>Mars 2021 - Juillet 2021 | Septembre 2021</h5>
                                    </div>
                                    <div class="exp-desc">
                                        <ul>
                                            <li>Création de contenu et création graphique</li><br/>
                                            <li>Gestion de site internet</li><br/>
                                            <li>Prospection</li><br/>
                                            <li>Communication avec les collaborateurs et la presse</li><br/>
                                        </ul>
                                    </div>
                                </div>
                            </section>
                            <h3>Certifications</h3>
                            <div className="certifications">
                                <div className="toiec">
                                <h4>TOEIC | 2023</h4><p>Niveau avancé<br/>820/990 - B2</p>
                                </div>
                                <div className="opquast">
                                  <h4>OPQUAST | 2021</h4><p>Qualité en projet web<br/>Niveau avancé<br/>805 points</p>
                                </div>
                                <div className="bafa">
                                <h4>BAFA | 2018</h4><p>Animation<br/>IFAC</p>
                                </div>
                                <div className="psc1">
                                   <h4>PSC1 | 2015</h4><p>À recycler !</p>
                                </div>
                            </div>
                        </div>
                    </div>
        </div>                  
    );
}

export default PresentationPage;