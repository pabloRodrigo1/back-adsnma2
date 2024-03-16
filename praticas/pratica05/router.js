const express = require('express');

const router = express.Router();

const produtos = [];

router.get('/produtos', (req, res) => {
  res.json(produtos);
});

router.get('/produtos/:produtoId', (req, res) => {
  const encontrado = produtos.find((produto) =>
    produto.id == req.params.produtoId)

  if (!encontrado) {
    res.status(404).json({ msg: "Produto não encontrado" });
    return;
  }
  res.json(encontrado);
});

router.post('/produtos', (req, res) => {
  if (!req.body || !req.body.nome || !req.body.preco) {
    res.status(422).json({ msg: "Nome ou preco do produto obrigatorios" });
    return;
  }
  const novo = {
    id: produtos.length + 1,
    nome: req.body.nome, preco: req.body.preco
  };
  produtos.push(novo)
  res.status(201).json(novo);
});




module.exports = router