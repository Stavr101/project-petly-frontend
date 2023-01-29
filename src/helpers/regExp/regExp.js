const pwd = /^[A-Za-z0-9]*$/;
const location = /[a-zA-Z]+,[a-zA-Z]+/i;
const mobile = /^\\+[1-9]{1}[0-9]{3,14}$/;

export const regExp = { pwd, location, mobile };

// /^[A-Za-zА-Яа-яїЇєЄ']+(?:[\s-][A-Za-zА-Яа-яїЇєЄ']+)*\s[A-Za-zА-Яа-яїЇєЄ']+(?:[\s-][A-Za-zА-Яа-яїЇєЄ']+)*$/
