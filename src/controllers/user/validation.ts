const validation = {
  create: {
    email: {
      errorMessage: 'email is required',
      in: ['body'],
      regex: RegExp(/^[A-Za-z0-9._%+-]+@successive.tech$/),
      required: true,
    },
    name: {
      errorMessage: 'Name is required',
      in: ['body'],
      regex: RegExp('[a-zA-Z]+\\.?'),
      required: true,
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
  },
  get: {
    limit: {
      default: 10,
      errorMessage: 'Limit is invalid',
      in: ['query'],
      required: false,
    },
    skip: {
      default: 0,
      errorMessage: 'Skip is invalid',
      in: ['query'],
      required: false,
    },
  },
  update: {
    dataToUpdate: {
      in: ['body'],
      isObject: true,
      required: true,
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
