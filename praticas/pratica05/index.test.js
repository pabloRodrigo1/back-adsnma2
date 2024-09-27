const supertest = require('supertest');

const app = require('./index');

const request = supertest(app);

test('retorna 200 e um JSON no GET /produtos', async () => {
  const response = await request.get('/produtos');
  expect(response.status).toBe(200);
  expect(response.headers['content-type']).toMatch(/json/);
});

test('retorna 200 e um JSON no GET/produtos/1', async () => {
  const response = await request.get('/produtos/1');
  expect(response.status).toBe(200);
  expect(response.headers['content-type']).toMatch(/json/);
});

test('retorna 404 e um JSON no GET/produtos/100', async () => {
  const response = await request.get('/produtos/100');
  expect(response.status).toBe(404);
  expect(response.headers['content-type']).toMatch(/json/);
});

test('retorna 201 e um JSON {nome: uva, preco: 20.00} no POST/produtos', async () => {
  const response = await request.post('/produtos').send({ nome: 'uva', preco: 20.00 });
  expect(response.status).toBe(201);
  expect(response.headers['content-type']).toMatch(/json/);
});

test('Verifica se a chamada POST /PRODUTOS sem um JSON retorna 422 em um JSON', async () => {
  const response = await request.post('/produtos').send({});
  expect(response.status).toBe(422);
  expect(response.headers['content-type']).toMatch(/json/);
});

test('retorna 200 e um JSON no PUT/produtos/1 com um JSON {nome: uva-verde, preco: 18.00}', async () => {
  const response = await request.put('/produtos/1');
  expect(response.status).toBe(200);
  expect(response.headers['content-type']).toMatch(/json/);
});

test('retorna 204 e um JSON no PUT/produtos/100', async () => {
  const response = await request.put('/produtos/100');
  expect(response.status).toBe(204);
  expect(response.headers['content-type']).toMatch(/json/);
});

test('retorna 204 sem conteudo no DELETE/produtos/1', async () => {
  const response = await request.put('/produtos/1');
  expect(response.status).toBe(204);
  expect(response.body).toEqual({});
});

test('retorna 404 e um JSON no DELETE/produtos/100', async () => {
  const response = await request.delete('/produtos/100');
  expect(response.status).toBe(404);
  expect(response.headers['content-type']).toMatch(/json/);
});