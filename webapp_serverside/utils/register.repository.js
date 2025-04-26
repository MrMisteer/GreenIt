const db = require('./db.include');

module.exports = {
  // Vérifie si un utilisateur existe déjà par email
  async findUserByEmail(email) {
    try {
        console.log('Email à vérifier :', email); // Ajout de la ligne de log
      const query = 'SELECT * FROM users WHERE email = ?';
      const [rows] = await db.query(query, [email]);
      return rows;
    } catch (error) {
      console.error('Erreur lors de la vérification de l\'email (register.repository.js) :', error.message);
      throw error;
    }
  },

  // Insère un nouvel utilisateur dans la base de données
  async createUser(email, hashedPassword, username) {
    try {
      const query = `
        INSERT INTO users (email, password_hash, username)
        VALUES (?, ?, ?)
      `;
      await db.query(query, [email, hashedPassword, username]);
    } catch (error) {
      console.error('Erreur lors de l\'insertion de l\'utilisateur (register.repository.js) :', error.message);
      throw error;
    }
  }
};