import { NextFunction, Request, Response } from 'express';

export const checkToken = (req: Request, res: Response, next: NextFunction) => {
  if(req.headers['token'] === process.env.TOKEN)
    return next()

  res.status(400).send("Invalid Header")
}