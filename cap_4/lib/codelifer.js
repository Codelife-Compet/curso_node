
const codelifers = [
  "Henrique",
  "Richard",
  "Natália",
  "Lucas",
  "Francisco",
  "Aline",
  "Luiz"
];
exports.getCodelifer=()=>{
  const index_codelifer = codelifers[Math.floor(Math.random() * codelifers.length)];
  return codelifers[index_codelifer];
}