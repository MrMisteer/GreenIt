const db = require('./db.include');

module.exports = {
    async log(params) {
        try {
            const query = `
                SELECT * FROM users WHERE email = ?`;
            const [user] = await db.query(query, [params]);
            return user[0];
        } catch (error) {
            console.error('Error while fetching user (login.repository.js):', error.message);
            throw error;
        }
    }
}
