const request = require('supertest');
const server = require('../server');
const db = require('../../data/db-config');

describe('articles router', () => {
    it('does not return data unless there is a valid JSON web token in the header', async () => {
        const res = await request(server).get('/api/articles');

        expect(res.body).toMatchObject({ message: 'token required' });
    });
});

// the test passes, but cannot be used with NODE_ENV. DB_ENV ruins the rest of the server, so it cannot be used.