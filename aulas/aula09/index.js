require('dotenv').config();
const mongoose = require('mongoose');
const Produto = require('./modelo');

const url = process.env.MONGODB_URL;

async function main() {
  try {
    await mongoose.connect(url);
  } catch (err) {
    console.log("Deu ruim", err.message);
  }

  // ---- Adiciona 1 Produtos -----
  const produto = new Produto({
    nome: "banana",
    preco: 12,
    quantidade: 5
  });
  try {
    await produto.save();
    console.log(produto);
  } catch (err) {
    for (let key in err.erros) {
      console.log(err.errors[key].message);
    }
  }

  // ---- Adiciona 1 Produtos -----
  // const produto = await Produto.create({
  //   nome: "uva",
  //   preco: 32.5,
  //   quantidade: '2'
  // })
  // console.log(produto);

  // ---- Adiciona varios Produtos -----
  //const produtos = await Produto.insertMany([
  //  { nome: "maca", preco: 20.7, quantidade: 8 },
  //  { nome: "pera", preco: 12.5, quantidade: 18 },
  //  { nome: "laranja", preco: 25.6, quantidade: 28 }
  // ]);
  // console.log(produto);
  // ---- consultar 1 produto -----
  // const produto = await Produto.findOne({ nome: "banana" });
  // console.log(produto);

  // ---- Consultar N produtos
  // const produtos = await Produto.find({ nome: "banana" });
  // console.log(produtos);

  // ---- atualizar 1 produto -----
  // const produto = await Produto.findOneAndUpdate(
  //  {nome: "banana" },
  // { "banana nanica", preco: 15.0, quantidade: 20 }
  // );
  // console.log(produto);

  //const result = await Produto.updateOne(
  //  { nome: "uva" },
  //  { nome: "uva globo", preco: 19.0, quantidade: 11 }
  //);
  // console.log(result);

  // ---- remove 1 produto -----
  // const produto = await Produto.findOneAndDelete({nome: "uva"});
  // console.log(produto);



  await mongoose.disconnect();
}

main();