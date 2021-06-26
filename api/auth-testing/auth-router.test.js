const request = require('supertest');
const server = require('../server');
const db = require('../../data/db-config');

describe('authRouter', () => {
    beforeAll(async () => {
        await db.migrate.rollback();
        await db.migrate.latest();
    });

    beforeEach(async () => {
        await db('users').truncate();
    });

    describe('[POST] /api/auth/register', () => {
        it('returns a valid response', async () => {
           const res = await request(server).post('/api/auth/register').send({ username: 'dougbowser', password: 'password' });

           expect(res.status).toBe(201);
        });
        it('hashes the password', async () => {
            const res = await request(server).post('/api/auth/register').send({ username: 'dougbowser', password: 'password' });
            
            expect(res.body.password).not.toBe('password');
        });
        it('returns proper error if username is missing', async () => {
            const res = await request(server).post('/api/auth/register').send({ password: 'password' });

            expect(res.status).toBe(400);
            expect(res.body).toMatchObject({ message: 'please provide a username and password' });
        });
        it('returns proper error if password is missing', async () => {
            const res = await request(server).post('/api/auth/register').send({ username: 'dougbowser' });

            expect(res.status).toBe(400);
            expect(res.body).toMatchObject({ message: 'please provide a username and password' });
        });
    });
    describe('[POST] /api/auth/login', () => {
        it('returns a valid response', async () => {
            await request(server).post('/api/auth/register').send({ username: 'dougbowser', password: 'password' });
            const res = await request(server).post('/api/auth/login').send({ username: 'dougbowser', password: 'password' });

            expect(res.status).toBe(200);
            expect(res.body).toHaveProperty('token');
        });
        it('returns proper error when user does not exist', async () => {
            const res = await request(server).post('/api/auth/login').send({ username: 'dougbowser', password: 'password' });

            expect(res.status).toBe(404);
            expect(res.body).toMatchObject({ message: "There is no user with that username" });
        });
        it('returns proper error when password does not match', async () => {
            await request(server).post('/api/auth/register').send({ username: 'dougbowser', password: 'password' });
            const res = await request(server).post('/api/auth/login').send({ username: 'dougbowser', password: 'passwor' });

            expect(res.status).toBe(401);
            expect(res.body).toMatchObject({ message: 'Invalid credentials' });
        });
    });
});