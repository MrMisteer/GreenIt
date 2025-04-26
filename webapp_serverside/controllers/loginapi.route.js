const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const loginRepository = require('../utils/login.repository');

const JWT_SECRET = 'votre_secret_jwt';;

router.post('/', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await loginRepository.log(email);
    if (!user) {
      return res.status(401).json({ message: 'Email ou mot de passe incorrect.' });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password_hash);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Email ou mot de passe incorrect.' });
    }
    const token = jwt.sign({ id: user.id, role: user.role }, JWT_SECRET, { expiresIn: '1h' });

    res.json({ message: 'Connexion réussie', token });
  } catch (err) {
    console.error('Erreur lors de la connexion :', err);
    res.status(500).json({ message: 'Erreur serveur.' });
  }
});

module.exports = router;