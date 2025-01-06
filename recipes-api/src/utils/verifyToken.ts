import * as jwt from 'jsonwebtoken';

export const verifyToken = (token: string) => {
  return jwt.verify(token, process.env['JWT_SECRET'] as string) as {
    id: string;
  };
};
