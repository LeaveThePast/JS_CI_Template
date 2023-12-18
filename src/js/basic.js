
// Userdata validator
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

// User settings
class Settings {
  constructor() {
    this.defaultSettings = new Map([
      ['theme', 'dark'],
      ['music', 'trance'],
      ['difficulty', 'easy']
    ]);
    this.userSettings = new Map();
  }

  setSetting(name, value) {
    if (name == "theme" && (value == "light" || value == "gray" || value == "dark")) {
      this.userSettings.set(name, value);
    } else if (name == "music" && (value == "pop" || value == "rock" || value == "chillout" || value == "off" || value == "trance")) {
      this.userSettings.set(name, value);
    } else if (name == "difficulty" && (value == "normal" || value == "hard" || value == "nightmare" || value == "easy")) {
      this.userSettings.set(name, value);
    } else {
      throw new Error (`Некорректно указан тип параметра ${name}, или его значение ${value}`)
    }
  }

  get settings() {
    return new Map([...this.defaultSettings, ...this.userSettings]);
  }
}

// ArrayBuffer converter
class ArrayBufferConverter {
  load(buffer) {
    this.buffer = buffer;
  }

  toString() {
    return String.fromCharCode.apply(null, new Uint16Array(this.buffer));
  }
}

function getBuffer() {
  const data = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
  const buffer = new ArrayBuffer(data.length * 2);
  const bufferView = new Uint16Array(buffer);
  for (let i = 0; i < data.length; i++) {
    bufferView[i] = data.charCodeAt(i);
  }
  return buffer;
}

// Basic actions, shoud be moved in app.js
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

export { Validator, Settings, ArrayBufferConverter, getBuffer, cleanAndFormatPhone, orderByProps, extractAttackInfo }
