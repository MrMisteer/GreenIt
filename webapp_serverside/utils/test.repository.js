const db = require('./db.include');

module.exports = {


    async fetchallnames() {
        try {
        const query = `
            SELECT * FROM test`;
        const [names] = await db.query(query);
        return names;
        } catch (error) {
        console.error('Error while fetching names (test.repository.js):', error.message);
        throw error;
        }
    }
}
