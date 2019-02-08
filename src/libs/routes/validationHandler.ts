import { NextFunction, Request, Response } from 'express';
function validationHandler(objConfig) {
  return (req: Request, res: Response, next: NextFunction): void => {
    try {
    const keys: string[] = Object.keys(objConfig);
    keys.forEach((key: string) => {
      const item = objConfig[key];
      const value = item.in.map((items) => {
        return req[items][key];
      });
      if (item && item.required) {
        const validValue = value.filter((items) => items);
        if (validValue.length !== value.length) {
          next('Provide Values');
        }
      }
      if (item && item.string) {
        const validValue = value.filter((items) => items);
        validValue.forEach((element) => {
          if (typeof element !== 'string') {
            next(item.errorMessage || ' provide string type value ');
          }
        });
      }
      if (item && item.regex) {
        const validValue = value.filter((items) => items);
        if (!item.regex.test(validValue)) {
          next(item.errorMessage || ' invalid name ');
        }
      }
      if (!item.required) {
        if (item && item.number) {
          const validValue = value.filter((items) => items);
          validValue.forEach((element) => {
            if (typeof element !== 'number') {
              next(item.errorMessage || ' provide number type of value ');
            }
          });
        }
      }
      if (item.isObject) {
        const validValue = value.filter((items) => items);
        validValue.forEach((element) => {
          if (typeof element !== 'object') {
            next(item.errorMessage || ' not in object format ');
          }
        });
      }
      if (item.number) {
        let validValue = value.filter((items) => items);
        if (isNaN(req.query.skip) || isNaN(req.query.limit)) {
          next({ error: 'Bad Request' });
        }
        if (validValue === '') {
          validValue = item.default;
        }
      }
      if (item.custom) {
        const validValue = value.filter((items) => items);
        item.custom(validValue[0]);
      }
    });
    next();
    }
    catch (error) {
      console.log('error------', error);
    }

  };
}
export default validationHandler;
