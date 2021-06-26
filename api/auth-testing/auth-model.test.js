const db = require('../../data/db-config');
const Auth = require('../auth/auth-model');

describe('Auth model', () => {
    beforeAll(async () => {
        await db.migrate.rollback();
        await db.migrate.latest();
    });

    beforeEach(async () => {
        await db('users').truncate();
    });

    describe('findById()', () => {
        it('returns the user with the specified id', async () => {
            const {id} = await Auth.add({ username: 'dougbowser', password: 'password' });

            const user = await Auth.findById(id);

            expect(user).toMatchObject({ username: 'dougbowser', password: 'password' });
        });
        it('returns undefined if there is no user with the specified id', async () => {
            const user = await Auth.findById(1);

            expect(user).toBeUndefined();
        });
    });
    describe('findBy()', () => {
        it('returns the user that matches the filter (username)', async () => {
            await Auth.add({ username: 'dougbowser', password: 'password' });

            const user = await Auth.findBy({ username: 'dougbowser' });

            expect(user).toMatchObject({ username: 'dougbowser', password: 'password' });
        });
    });
});