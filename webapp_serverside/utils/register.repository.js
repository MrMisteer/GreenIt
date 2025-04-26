const db = require('./db.include');
module.exports = {
  async findUserByEmail(email) {
    try {
      const query = 'SELECT * FROM users WHERE email = ?';
      const [rows] = await db.query(query, [email]);
      return rows;
    } catch (error) {
      console.error('Erreur lors de la vérification de l\'email (register.repository.js) :', error.message);
      throw error;
    }
  },
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