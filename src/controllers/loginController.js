const loginService = require('../services/loginService');
const jwtService = require('../services/jwtService');

const getLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const loginData = await loginService.validateLogin({ email, password });
    delete loginData.password;
    const token = jwtService.makeToken(loginData);
    return res.status(200).json({ token });
  } catch (err) {
    res.status(err.status).json({ message: err.warning });
  }
};

module.exports = {
  getLogin,
};
