const { sign, verify } = require("jsonwebtoken");
const { credentials } = require("../config");

exports.signAccessToken = ({ username, sessionId }, expiresIn) => {
  return sign({ username, sessionId }, credentials.accessToken, { expiresIn });
};
exports.verifyAccessToken = (token) => {
  try {
    const payload = verify(token, credentials.accessToken);
    return { payload, expired: false };
  } catch (error) {
    return { payload: null, expired: error.message.includes("jwt expired") };
  }
};

exports.signRefreshToken = ({ sessionId }, expiresIn) => {
  return sign({ sessionId }, credentials.refreshToken, { expiresIn });
};
exports.verifyRefreshToken = (token) => {
  try {
    const payload = verify(token, credentials.refreshToken);
    return { payload, expired: false };
  } catch (error) {
    return { payload: null, expired: error.message.includes("jwt expired") };
  }
};
