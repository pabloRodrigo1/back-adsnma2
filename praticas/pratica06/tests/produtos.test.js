const supertest = require('supertest');

const app = require('../app');

const request = supertest(app);

describe('teste da API', () => {
  test("POST retorna /produtos com JSON { “nome”: “uva”, “preco”: 20.00} status 201", async () => {
    const novo = { nome: "uva", preco: 20.0 };
    const response = await request.post("/produtos").send(novo);
    expect(response.status).toBe(201);
    expect(response.type).toBe("application/json");
    expect(response.body).toHaveProperty("id", 1);
    expect(response.body).toHaveProperty("nome", novo.nome);
    expect(response.body).toHaveProperty("preco", novo.preco);
  });

  test("GET / deve retornar 200 um array JSON", async () => {
    const response = await request.get("/produtos");
    expect(response.status).toBe(200);
    expect(response.type).toBe("application/json");
    expect(Array.isArray(response.body)).toBe(true);
  });

  test("GET /produtos/1 retorna 200 e um JSON", async () => {
    const response = await request.get("/produtos/1");
    expect(response.status).toBe(200);
    expect(response.type).toBe("application/json");
  });

  test("")

});