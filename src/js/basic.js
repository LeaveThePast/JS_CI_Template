class Validator {
  static validateUsername(username) {
      const pattern = /^[a-zA-Z_-][a-zA-Z0-9_-]{0,28}[a-zA-Z0-9_-]$/;

      if (pattern.test(username) && !/\d{4,}/.test(username)) {
          return true;
      } else {
          return false;
      }
  }
}

function cleanAndFormatPhone(phoneNumber) {
  const cleanedNumber = phoneNumber.replace(/[^\d+]/g, '');

  const formattedNumber = cleanedNumber.startsWith('8') ? '+7' + cleanedNumber.slice(1) : cleanedNumber;

  return formattedNumber;
}

function orderByProps(obj, order) {
  const result = [];

  for (const prop of order) {
    if (Object.prototype.hasOwnProperty.call(obj, prop)) {
      result.push({ key: prop, value: obj[prop] });
      delete obj[prop];
    }
  }

  const sortedKeys = Object.keys(obj).sort();
  for (const key of sortedKeys) {
    result.push({ key, value: obj[key] });
  }

  return result;
}

function extractAttackInfo({ special }) {
  return special.map(({ id, name, description = 'Описание недоступно', icon }) => ({
    id,
    name,
    description,
    icon,
  }));
}

export { Validator, cleanAndFormatPhone, orderByProps, extractAttackInfo }
