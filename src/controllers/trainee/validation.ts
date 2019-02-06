const validation = {
  create: {
    email: {
      errorMessage: 'email is required',
      in: ['body'],
      regex: RegExp(/^[A-Za-z0-9._%+-]+@successive.tech$/),
      required: true,
    },
    id: {
      in: ['body'],
      required: false,
      string: true,
      custom(value) {
        console.log('Value', value);
        if (Array.isArray(value)) {
          console.log('it is an array');
        }
        throw { error: 'Error Occurred', message: 'Message' };
      },
    },
    name: {
      errorMessage: 'Name is required',
      in: ['body'],
      regex: RegExp('[a-zA-Z]+\\.?'),
      required: false,
    },
    userPassword: {
      errorMessage: 'password required',
      in: ['body'],
      required: true,
    },
  },
  delete: {
    id: {
      errorMessage: 'Id is required',
      in: ['params'],
      required: false,
    },
    name: {
      errorMessage: 'name is required',
      in: ['params'],
      required: true,
    },
  },
  get: {
    limit: {
      default: 10,
      errorMessage: 'Limit is invalid',
      in: ['query'],
      number: true,
      required: false,
    },
    skip: {
      default: 0,
      errorMessage: 'Skip is invalid',
      in: ['query'],
      number: true,
      required: false,
    },
  },
  update: {
    dataToUpdate: {
      in: ['body'],
      isObject: true,
      required: true,
      // tslint:disable-next-line: no-empty
      custom(dataToUpdate) {},
    },
    id: {
      in: ['body'],
      required: false,
      string: true,
    },

    name: {
      in: ['body'],
      isObject: true,
      required: true,
    },
  },
};
export default validation;
