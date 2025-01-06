import { NextFunction, Request, Response } from 'express';

export const catchAsync = (fn: any) => (req: Request, res: Response, next?: NextFunction) =>
  fn(req, res, next).catch((error: any) => {
    if (error.status && error.errorCode && error.message) {
      return res.status(error.status).json({ error });
    }

    const message = error.message || error.originalError?.info?.message;

    return res.status(500).json({ error: { message: message || error } });
  });
