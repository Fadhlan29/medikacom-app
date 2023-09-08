import Users from '../models/UserModel.js';
import argon2 from 'argon2'

export const getUsers = async (req, res) => {
  try {
    const response = await Users.findAll({
      attributes: ['uuid', 'name'],
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({msg: error.message});
  }
};

export const createUser = async (req, res) => {
  const {name, password, confPassword} = req.body;
  if (password !== confPassword)
    return res
      .status(400)
      .json({message: 'Password and Confirm Password do not match'});
  const hashPassword = await argon2.hash(password);
  try {
    await Users.create({
      name: name,
      password: hashPassword
    });
    res.status(201).json({message: 'Registration Success'});
  } catch (error) {
    res.status(400).json({message: error.message});
  }
};
