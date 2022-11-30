// eslint-disable-next-line no-unused-vars
const env = process.env.NODE_ENV ?? "development";
const credentials = require(`../../.credentials.${env}.json`);
module.exports = { credentials };
