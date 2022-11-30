const { v4: uuidV4 } = require("uuid");
const bcrypt = require("bcrypt");
const { MockUsers, sessions } = require("../db");
const {
  signAccessToken,
  signRefreshToken,
  verifyRefreshToken,
} = require("../utils/jwt.utils");

const saltRounds = 12;
const createUser = ({ username, password }) => {
  const id = uuidV4();
  bcrypt.hash(password, saltRounds, function (err, hash) {
    if (err) throw err;
    const user = { id, username, password: hash };
    console.log(user);
    MockUsers.push(user);
  });
};
const verifyUser = (username, password) => {
  const user = MockUsers.find((user) => user.username === username);
  if (!user) {
    throw new Error("Usuário ou senha inválidos");
  }
  bcrypt.compare(password, user.password, function (err, result) {
    if (err) throw err;
    if (!result) throw new Error("Usuário ou senha inválidos");
  });
  return { username: user.username };
};
exports.registerHandler = (req, res) => {
  const { username, password, confirmPassword } = req.body;

  if (!password || !username || !confirmPassword) {
    req.session.flash = {
      type: "danger",
      intro: "Erro de validação",
      message: "Parâmetros inválidos",
    };
    return res.redirect(303, "/register");
  }
  const userAlreadyExists = MockUsers.find(
    (user) => user.username === username
  );
  if (userAlreadyExists) {
    req.session.flash = {
      type: "danger",
      intro: "Erro de validação",
      message: "Usuário já registrado",
    };
    return res.redirect(303, "/login");
  }
  if (password !== confirmPassword) {
    req.session.flash = {
      type: "danger",
      intro: "Erro de validação",
      message: "Senhas não coincidem",
    };
    return res.redirect(303, "/register");
  }
  createUser({ username, password });
  const session = sessions.createSession({ username });
  delete req.session.username;
  req.session.username = session.username;
  /* const accessToken = signAccessToken(
    { username, sessionId: session.id },
    "20s" // valido por 20 segundos
  );
  */
  const refreshToken = signRefreshToken({ sessionId: session.id }, "1d");
  res.cookie("refreshToken", refreshToken, {
    maxAge: 8.64e7, // 1 dia de duração
    httpOnly: true,
  });
  return res.redirect(303, "/");
  // return res.json({ accessToken });
};
exports.refreshHandler = (req, res) => {
  const { refreshToken } = req.cookies;
  const { payload, expired } = verifyRefreshToken(refreshToken);
  if (!payload) {
    return res.status(403).json({ error: "invalid token" });
  }
  if (expired) {
    return res.status(403).json({ error: "expired token" });
  }
  const session = sessions.getSession(payload.sessionId);
  if (!session || !session.valid) {
    return res.status(403).json({ error: "invalid session" });
  }
  const accessToken = signAccessToken(
    {
      username: session.username,
      sessionId: session.id,
    },
    "20s"
  );
  return res.json({ accessToken });
};
exports.loginHandler = (req, res) => {
  const { username, password } = req.body;
  try {
    const user = verifyUser(username, password);
    const session = sessions.createSession({ username: user.username });
    delete req.session.username;
    req.session.username = session.username;
    /* const accessToken = signAccessToken(
      {
        username: user.username,
        sessionId: session.id,
      },
      "20s"
    );
    */
    const refreshToken = signRefreshToken({ sessionId: session.id }, "1d");
    res.cookie("refreshToken", refreshToken, {
      maxAge: 8.64e7, // 1 dia de duração
      httpOnly: true,
    });
    return res.redirect(303, "/");
    /* return res.json({ accessToken }); */
  } catch (error) {
    req.session.flash = {
      type: "danger",
      intro: "Erro de validação",
      message: error.message,
    };
    return res.redirect(303, "/login");
  }
};
