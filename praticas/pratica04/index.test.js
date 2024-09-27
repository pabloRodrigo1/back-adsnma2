const supertest = require('supertest');

const app = require('./index');

const request = supertest(app);

test('retorna 200 no GET', async () => {
    const response = await request.get('/');
    expect(response.status).toBe(200);
});

test('retorna 201 no POST', async () => {
    const response = await request.post('/');
    expect(response.status).toBe(201);
});

test('retorna 200 no PUT', async () => {
    const response = await request.put('/');
    expect(response.status).toBe(200);
});

test('retorna 204 no DELETE', async () => {
    const response = await request.delete('/');
    expect(response.status).toBe(204);
})
