const readline = require('readline-sync');
const controlador = require('./controlador');

const menu = () => {
  console.log('1 - Adicionar Contato');
  console.log('2 - Listar Contatos');
  console.log('3 - Buscar Contato');
  console.log('4 - Atualizar Contato');
  console.log('5 - remover Contato');
  console.log('6 - Sair');

};

const escolherOpcao = (opcao) => {
  switch (opcao) {
    case '1': {
      const nome = readline.question('digite o nome do contato: ');
      const email = readline.question('digite o email do contato: ');
      const telefone = readline.question('digite o telefone do contato: ');
      controlador.adicionarContato(nome, email, telefone);
      break;
    };
    case '2': {
      const contatos = controlador.listarContato();
      contatos.forEach(contato => console.log(contato));
      break;
    };
    case '3': {
      const nome = readline.question('digite o nome do contato: ');
      const contato = controlador.buscarContato(nome);

      if (contato !== null) {
        console.log(contato)
      } else {
        console.log('Contato nao encontrado!')
      };
      break;
    };

    case '4': {
      const nome = readline.question('digite o nome do contato: ');
      const email = readline.question('digite o email do contato: ');
      const telefone = readline.question('digite o telefone do contato: ');
      controlador.atualizarContato(nome, email, telefone);
      break;
    };

    case '5': {
      const nome = readline.question('digite o nome do contato: ');
      controlador.removerContato(nome);
      break;
    };
    case '6': process.exit(0);

    default: console.log('opcao invalida!');
  };
};

const main = () => {
  while (true) {
    menu();
    const opcao = readline.question('Escolha uma opcao: ');
    escolherOpcao(opcao);
  };
};

main();