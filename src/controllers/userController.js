const { makeToken } = require('../services/jwtService');
const userService = require('../services/userService');

const addUser = async (req, res) => {
  try {
    console.log('1controlerLog: ', req.body);
    const data = await userService.fieldsValidation(req.body);
    const newUser = await userService.userCreate(data);
    delete newUser.password;
    const token = makeToken(newUser);
    return res.status(201).json({ token });
  } catch (err) {
    res.status(err.status).json({ message: err.warning });
  }
};

module.exports = {
  addUser,
};

// requisiçao da route:
// {
//     "displayName": "Brett Wiltshire",
//     "email": "brett@email.com",
//     "password": "123456",
//     "image": "http://4.bp.blogspot.com/_YA50adQ-7vQ/S1gfR_6ufpI/AAAAAAAAAAk/1ErJGgRWZDg/S45/brett.png"
//   }