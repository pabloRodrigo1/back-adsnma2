const produtos = [];

const listarTodos = (req, res) => {
  res.json(produtos);
};

const exibir = (req, res) => {
  const { produtoEncontrado } = req;
  req.json(produtoEncontrado);
}

const buscarPeloId = (req, res) => {
  const { produtoId } = req.params; // { chave1: valor, chave2: valor }
  const produtoEncontrado = produtos.find(item => item.id == produtoId);
  if (produtoEncontrado) {
    req.produtoEncontrado = produtoEncontrado
    next()
  } else {
    res.status(404).json({ msg: "Produto não Encontrado" });
  }
};

const criar = (req, res) => {
  const { nome, preco } = req.body;
  const produtoNovo = { id: produtos.length + 1, nome, preco }
  produtos.push(produtoNovo);
  res.status(201).json(produtoNovo);
};

const atualizar = (req, res) => {
  const { produtoId } = req.params;
  const { nome, preco } = req.body;
  const produtoEncontrado = req;
  produtoEncontrado.nome = nome;
  produtoEncontrado.preco = preco;
  res.json(produtoEncontrado);
};

const remover = (req, res) => {
  const { produtoId } = req.params;
  const posicao = produtos.findIndex(item => item.id == produtoId);
  if (posicao >= 0) {
    produto.splice(posicao, 1);
    res.status(204).end();
  }
};

module.exports = { listarTodos, buscarPeloId, criar, atualizar, remover, exibir };