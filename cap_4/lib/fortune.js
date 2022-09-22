const fortunes = [
  "Crie uma nova página do zero",
  "Edite uma parte do código e teste",
  "Crie um arquivo CSS",
  "Vincule um arquivo CSS ao projeto, se não existir crie um",
  "Adicione uma nova tarefa para o projeto",
  "Escolha alguém para explicar uma parte do código",
  "Explique uma parte do código"
];
exports.getFortune=()=>{
    const index_fortune = Math.floor(Math.random() * fortunes.length);
    return fortunes[index_fortune];
  }