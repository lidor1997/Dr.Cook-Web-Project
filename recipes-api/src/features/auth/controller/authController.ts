import bcrypt from 'bcryptjs';
import { Response } from 'express';

import { catchAsync, generateToken } from '../../../utils';
import { User } from '../../user/models';

import { LoginByTokenRequestType, LoginRequestType, RegisterUserRequestType } from './types';

export const register = catchAsync(async (req: RegisterUserRequestType, res: Response) => {
  const { username, password, name } = req.body;

  if (!username || !password || !name) {
    throw 'Please enter all fields';
  }

  const existingUser = await User.findOne({ username });

  if (existingUser) {
    throw 'User already exists';
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const newUser = new User({
    username,
    password: hashedPassword,
    name,
  });

  const userRes = await newUser.save();

  const token = generateToken({ id: userRes._id });

  return res.status(201).json({ id: userRes._id, name: userRes.name, username: userRes.username, token });
});

export const login = catchAsync(async (req: LoginRequestType, res: Response) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username });

  if (!user) {
    throw 'Invalid credentials';
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    throw 'Invalid credentials';
  }

  const token = generateToken({ id: user._id });

  return res.status(200).json({
    id: user._id,
    username: user.username,
    name: user.name,
    token,
  });
});

export const loginByToken = catchAsync(async (req: LoginByTokenRequestType, res: Response) => {
  const { user, token } = req;

  if (!user) {
    throw 'token is expired';
  }

  return res.status(200).json({ id: user._id, username: user.username, name: user.name, token });
});
