import { NextFunction, Request, Response } from 'express';

import { User, UserType } from '../features/user/models';
import { catchAsync, verifyToken } from '../utils';

interface IAuth extends Request {
  user?: UserType;
  token?: string;
}

export const auth = catchAsync(async (req: IAuth, res: Response, next: NextFunction) => {
  const authorization = req.headers.authorization;

  if (!authorization) throw {};

  const token = authorization.split('Bearer ')[1];

  const verified = verifyToken(token);

  if (!verified) throw {};

  const user = await User.findById(verified.id);

  if (!user) throw 'Token expired';

  req.user = user;
  req.token = token;
  next();
});
