const { Session } = require("./sessions");
const { MockUsers } = require("./users");
const sessions = new Session();
module.exports = {
  MockUsers,
  sessions: sessions.getInstance(),
};
