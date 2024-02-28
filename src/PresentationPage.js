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
                            <div className="parcours-scolaire">
                                <h3>Parcours Scolaire</h3>
                                <div class="exp">
                                    <div class="exp-info">
                                        <h4>ESIPE-ESIEE Paris</h4>
                                        <h5>2021 - Aujourd'hui</h5>
                                    </div>
                                    <div class="exp-desc">
                                        <h5>Diplômation : Automne 2024 </h5>
                                        <p>Diplôme d’ingénieur Image Multimédia Audiovisuel et Communication - Spécialité WEB</p>
                                    </div>
                                </div>
                                <div class="exp">
                                    <div class="exp-info">
                                        <h4>IUT Paul Sabatier France</h4>
                                        <h5>2020 - 2021</h5>
                                    </div>
                                    <div class="exp-desc">
                                        <h5>Diplômation : Automne 2021 </h5>
                                        <p>Diplôme Universitaire Technologique, Métiers du Multimédia et de l’Internet</p>
                                    </div>
                                </div>
                                <div class="exp">
                                    <div class="exp-info">
                                        <h4>INSA TOULOUSE France</h4>
                                        <h5>2018 - 2020</h5>
                                    </div>
                                    <div class="exp-desc">
                                        <h5>Diplômation : Ajournée </h5>
                                        <p>Classe préparatoire en espagnol - École d’ingénieurs</p>
                                    </div>
                                </div>
                            </div>
                            <div className="experiences">
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
                            </div>
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
    );
}

export default PresentationPage;