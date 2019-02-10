import { NextFunction, Request, Response } from 'express';
export default function notFoundRoute(req: Request, res: Response, next: NextFunction): void {
  console.log('inside notFoundRoute');
  next('Not Found');
}
