
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

  const indexCodelifer =Math.floor(Math.random() * codelifers.length);
  return codelifers[indexCodelifer];
}