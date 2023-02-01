const pwd = /^[A-Za-z0-9]*$/;
const location =
  /^[A-Za-zА-Яа-яїЇєЄ']+(?:[\s-][A-Za-zА-Яа-яїЇєЄ']+)*\s[A-Za-zА-Яа-яїЇєЄ']+(?:[\s-][A-Za-zА-Яа-яїЇєЄ']+)*$/;

export const regExp = { pwd, location };
