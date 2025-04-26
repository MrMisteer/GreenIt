const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const registerRepository = require('../utils/register.repository'); // Import du repository

router.post('/', async (req, res) => {
  try {
    const { email, password, nom } = req.body;
    // Vérifiez si l'email existe déjà
    const existingUser = await registerRepository.findUserByEmail(email);
    if (existingUser.length > 0) {
      return res.status(400).json({ message: 'Cet email est déjà utilisé.' });
    }

    // Hachez le mot de passe
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insérez le nouvel utilisateur dans la base de données
    await registerRepository.createUser(email, hashedPassword, nom);

    res.status(201).json({ message: 'Utilisateur créé avec succès.' });
  } catch (error) {
    console.error('Erreur lors de l\'inscription :', error);
    res.status(500).json({ message: 'Erreur serveur.' });
  }
});

module.exports = router;