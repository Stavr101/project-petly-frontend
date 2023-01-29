const pwd = /^[A-Za-z0-9]*$/;
const location = /[a-zA-Z]+,[a-zA-Z]+/i;

export const regExp = { pwd, location };

// /^[A-Za-zА-Яа-яїЇєЄ']+(?:[\s-][A-Za-zА-Яа-яїЇєЄ']+)*\s[A-Za-zА-Яа-яїЇєЄ']+(?:[\s-][A-Za-zА-Яа-яїЇєЄ']+)*$/
