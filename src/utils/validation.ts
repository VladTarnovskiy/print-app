const checkEmail = (data: string) => {
  if (data.length < 8) {
    return 'Minimum 8 symbols';
  }

  const validEmail = data.includes('@');

  if (!validEmail) {
    return 'Invalid email domain';
  }

  return true;
};

const checkPassword = (password: string) => {
  const reg = /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])/g;

  if (password.length < 8) {
    return 'Minimum 8 symbols';
  }

  if (!reg.test(password)) {
    return 'Must be at least one letter, one digit, one special character';
  }

  return true;
};

export { checkEmail, checkPassword };
