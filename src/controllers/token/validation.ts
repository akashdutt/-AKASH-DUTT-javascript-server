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
      required: false,
    },
    userPassword: {
      errorMessage: 'password required',
      in: ['body'],
      required: true,
    },
  },
};
export default validation;
