const checkEmail = (data: string) => {
  const emailDomains = [
    '@gmail.com',
    '@yahoo.com',
    '@hotmail.com',
    '@yandex.ru',
    '@mail.ru',
  ];
  const domain = data.slice(data.indexOf('@'));

  if (data.length < 8) {
    return '"Minimum 8 symbols"';
  }

  const validEmail = emailDomains.includes(domain);

  if (!validEmail) {
    return '"Invalid email domain"';
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
