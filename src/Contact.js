
import React, { useState } from 'react';

const Contact = () => {

        const [formData, setFormData] = useState({
            name: '',
            email: '',
            message: '',
          });
        
          const handleChange = (e) => {
            setFormData({ ...formData, [e.target.name]: e.target.value });
          };
        
          const handleSubmit = (e) => {
            e.preventDefault();
        
            // Envoyer le formulaire au serveur ici
            fetch('/send-email', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(formData),
            })
              .then(response => response.json())
              .then(data => {
                console.log('Réponse du serveur:', data);
                // Gérer la réponse du serveur ici
              })
              .catch(error => {
                console.error('Erreur lors de l\'envoi du formulaire:', error);
              });
          };

          return(
           <div className="contact-zone">
                <h2>Me contacter ! </h2>
                <div className="formulaire-zone">
                    <div className="invitation">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ut, porro repudiandae et delectus est itaque quae ipsum quidem eligendi temporibus, neque nemo praesentium eius numquam aut sit, accusamus possimus!Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ut, porro repudiandae et delectus est itaque quae ipsum quidem eligendi temporibus, neque nemo praesentium eius numquam aut sit, accusamus possimus!</p>
                    </div>
                    <div className="formulaire">
                        <form onSubmit={handleSubmit}>
                        <label>
                            Nom:
                            <input type="text" name="name" value={formData.name} onChange={handleChange} />
                        </label>
                        <label>
                            Email:
                            <input type="email" name="email" value={formData.email} onChange={handleChange} />
                        </label>
                        <label>
                            Message:
                            <textarea name="message" value={formData.message} onChange={handleChange} />
                        </label>
                        <button type="submit">Envoyer</button>
                    </form>
                    </div>
                </div>
           </div>
            
  );
};

export default Contact;