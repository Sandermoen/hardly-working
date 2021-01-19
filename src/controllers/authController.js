const yup = require('yup');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const config = require('../utils/config');
const User = require('../models/User');
const token = require('../utils/token');

module.exports.register = async (req, res) => {
  const { email, firstName, lastName, password } = req.body;
  const schema = yup.object().shape({
    email: yup.string().email().required('the email field is required.'),
    firstName: yup.string().required('the first name field is required.'),
    lastName: yup.string().required('the last name field is required.'),
    password: yup.string().min(6).required('the password field is required.'),
  });

  await schema.validate(req.body, { abortEarly: false });

  const user = await User.findOne({ email });
  if (user) {
    return res
      .status(400)
      .send({ error: 'a user with that email already exists.' });
  }

  const refreshToken = token.generateRefreshToken();

  const newUser = new User({
    email,
    firstName,
    lastName,
    password,
    refreshToken,
  });

  await newUser.save();

  res.cookie('refreshToken', refreshToken, { httpOnly: true });
  return res.send({ user: newUser });
};

module.exports.login = async (req, res) => {
  const { email, password } = req.body;
  const schema = yup.object().shape({
    email: yup.string().email().required('the email field is required.'),
    password: yup.string().min(6).required('the password field is required.'),
  });

  await schema.validate(req.body, { abortEarly: false });

  const user = await User.findOne({ email });
  const validPassword = !user
    ? false
    : await bcrypt.compare(password, user.password);

  if (!validPassword || !user) {
    return res.status(401).send({ error: 'incorrect email or password.' });
  }

  const refreshToken = token.generateRefreshToken();
  const accessToken = token.generateAccessToken(user);

  user.refreshToken = refreshToken;
  await user.save();

  res.cookie('refreshToken', refreshToken, { httpOnly: true });
  return res.send({ user, accessToken });
};

module.exports.refresh = async (req, res) => {
  const { refreshToken } = req.cookies;
  if (!refreshToken) {
    return res.status(400).send({ error: 'please provide a refresh token.' });
  }

  // Makes sure the token is valid and not expired
  jwt.verify(refreshToken, config.JWT_SECRET);

  const user = await User.findOne({ refreshToken });
  if (!user) {
    return res
      .status(404)
      .send({ error: 'could not find a user associated with the token.' });
  }

  const accessToken = token.generateAccessToken(user);
  return res.send({ accessToken });
};
