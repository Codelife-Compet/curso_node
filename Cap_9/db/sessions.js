const { v4: uuidV4 } = require("uuid");

class Session {
  instance;
  sessions;
  constructor() {
    this.sessions = [];
  }

  getInstance() {
    if (!Session.instance) {
      Session.instance = new Session();
    }
    return Session.instance;
  }

  createSession({ username }) {
    const session = {
      username,
      id: uuidV4(),
      valid: true,
    };
    this.sessions.push(session);
    return session;
  }

  getSession(sessionId) {
    const session = this.sessions.find((session) => session.id === sessionId);
    return session && session.valid ? session : null;
  }

  invalidateSession(sessionId) {
    const sessionIndex = this.sessions.findIndex(
      (session) => session.id === sessionId
    );
    if (sessionIndex > -1) {
      const session = this.sessions[sessionIndex];
      session.valid = false;
      const newSession = this.sessions.splice(sessionIndex, 1, session);
      return newSession;
    }
  }
}
module.exports = { Session };
