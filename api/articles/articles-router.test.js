const request = require('supertest');
const server = require('../server');
const db = require('../../data/db-config');

describe('articles router', () => {
    it('does not return data unless there is a valid JSON web token in the header', async () => {

    });
});