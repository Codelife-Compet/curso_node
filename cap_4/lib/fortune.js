const fortunes = [
  "Explique uma parte do código",
  "Explique o que são módulos",
  "Explique a diferença entre CommonJS e ModuleJS",
  "Aponte no código o módulo criado para fornecer a lista de codelifers",
  "Diga uma vantagem relacionada a utilização de módulos no seu projeto",
  "Crie um módulo para uma das páginas atuais e exporte esse módulo para o arquivo principal do projeto",
  "Crie um módulo para a página not Found e exporte para o arquivo principal"
];
// Esse array pode e deve ser alterado em cada capítulo para refletir o conteúdo aprendido
exports.getFortune = ()=>{
    const indexFortune = Math.floor(Math.random() * fortunes.length);
    return fortunes[indexFortune];
  }