const contato = require("./modelo")

const contatos = []

const adicionarContato = (nome, email, telefone) => {
  const novoContato = new contato(nome, email, telefone)
  contatos.push(novoContato)
};

const listarContatos = () => {
  return contatos;
};

const buscarContatos = (nome) => {
  const buscar = contatos.find(contato => contato.nome === nome)
  return buscar
};

const atualizarContato = (nome, email, telefone) => {
  const contato = buscarContatos(nome)
  if (contato) {
    contato.nome = nome;
    contato.email = email;
    contato.telefone = telefone;
  }
};

const removerContato = (nome) => {
  const indice = contatos.findIndex(contato => contato.nome === nome)

  if (indice >= 0) {
    contatos.splice(indice, 1)
  }
};

module.exports= {adicionarContato, listarContatos, buscarContatos, atualizarContato, removerContato};