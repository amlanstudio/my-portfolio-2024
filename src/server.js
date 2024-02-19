const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const port = 3000; // Port du serveur

// Middleware pour parser le corps de la requête en JSON
app.use(bodyParser.json());

// Endpoint pour gérer l'envoi d'e-mails
app.post('/send-email', (req, res) => {
  const { name, email, message } = req.body;

  // Configurer le transporter nodemailer avec vos informations d'envoi d'e-mail
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'contact.amlanstudio@gmail.com',
      pass: 'DANIELE0103fr',
    },
  });

  // Paramètres du courriel
  const mailOptions = {
    from: 'votre_adresse_email@gmail.com',
    to: 'destinataire@example.com',
    subject: 'Nouveau message du formulaire de contact',
    text: `Nom: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  // Envoyer l'e-mail
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Erreur lors de l\'envoi de l\'e-mail:', error);
      res.status(500).json({ success: false, error: 'Erreur lors de l\'envoi de l\'e-mail' });
    } else {
      console.log('E-mail envoyé:', info.response);
      res.status(200).json({ success: true, message: 'E-mail envoyé avec succès' });
    }
  });
});

// Démarrer le serveur
app.listen(port, () => {
  console.log(`Serveur écoutant sur le port ${port}`);
});
