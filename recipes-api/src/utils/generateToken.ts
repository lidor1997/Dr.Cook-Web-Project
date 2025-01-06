import jwt, { Secret } from 'jsonwebtoken';

export const generateToken = ({ id }: { id?: string }) => {
  return jwt.sign({ id }, process.env.JWT_SECRET as Secret);
};
