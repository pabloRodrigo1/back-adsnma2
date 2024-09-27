const produtos = [];

const listarTodos = (req, res) => {
    res.json(produtos);
}

const exibir = (req, res) => {
  const { produtoEncontrado } = req;
  res.json(produtoEncontrado);
}


const buscarPeloId = (req, res, next) => {
  const { produtoId } = req.params;
  const produtoEncontrado = produtos.find(item => item.id == produtoId);
  if (produtoEncontrado) {
    req.produtoEncontrado = produtoEncontrado;
    next();
  } else {
    res.status(404).json({msg: "Produto não encontrado"});
  }
}    

const validarDados = (req, res, next) => {
  const { nome, preco } = req.body;
  if (nome && preco) {
    next();
  } else {
    res.status(422).json({ msg: "Nome e preço são obrigatórios" });
  }
}

const criar = (req, res) => {
  const { nome, preco } = req.body;
  const produtoNovo = { id: produtos.length+1, nome, preco }
  produtos.push(produtoNovo);
  res.status(201).json(produtoNovo);
}  

const atualizar = (req, res) => {
  const { nome, preco } = req.body;
  const { produtoEncontrado } = req;
  produtoEncontrado.nome = nome;
  produtoEncontrado.preco = preco;     
  res.json(produtoEncontrado);
}

const remover = (req, res) => {
   const { produtoId } = req.params;
   const posicao = produtos.findIndex(item => item.id == produtoId);
   if (posicao >= 0)  {
     produtos.splice(posicao, 1);
     res.status(204).end(); 
   }
}

module.exports = { listarTodos, exibir, buscarPeloId, validarDados, 
  criar, atualizar, remover }