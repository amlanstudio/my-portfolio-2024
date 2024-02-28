
import React, { useState } from 'react';
import moi from './img/moi.jpg';

const Contact = () => {

          return(
            <div className="container-con">
<div className="contact-zone">
                <h2>Me contacter ! </h2>
                <h3>Des clubs sportifs aux ateliers dessins, du thé au café, je m’adonne à toutes les possibilités ! Peu importe le domaine, je me faufile, trouve ma place et m’adapte. Je suis un véritable couteau-suisse ! Captivé.e ? Et si on se recontrait, plutôt thé ou café ?</h3>
                <div className="formulaire-zone">
                    <div className="invitation">
                        <img className="moi" src={moi} alt="" />
                    </div>
                    <div className="formulaire">                  
                    <iframe className="merde" src="https://docs.google.com/forms/d/e/1FAIpQLSc_f5h4CDgINwLT9t3Xk0J7kbsJgV3pevbQ5WrWpSme2jKOdw/viewform?embedded=true" 
                   width="100%" // Utilisation de 100% de la largeur disponible
                   height="1100"
                   frameborder="0"
                   marginheight="0"
                   marginwidth="0">Chargement…</iframe>
                    </div>
                </div>
           </div>
            </div>
           
            
  );
};

export default Contact;