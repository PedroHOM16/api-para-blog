const loginService = require('../services/loginService');

const getLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const loginData = await loginService.validateLogin({ email, password });
    // const emailExists = await loginService.validateEmail(loginData);
    const token = loginService.makeToken(loginData);
    console.log('controllerlogin ', typeof token, token);
    return res.status(200).json({ token });
  } catch (err) {
    console.log('errorConsole', err);
    res.status(err.status).json({ message: err.warning });
  }
};

module.exports = {
  getLogin,
};
