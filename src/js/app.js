//Team management
class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    if (this.members.has(character)) {
      throw new Error("Такой персонаж уже есть в команде");
    }
    this.members.add(character);
  }

  addAll(...characters) {
    characters.forEach((character) => {
      this.members.add(character);
    });
  }

  toArray() {
    return Array.from(this.members);
  }

  // [Symbol.iterator]() {
  //   membersArray = this.toArray()
  //   let currentIndex = 0

  //   return {
  //     next: () => {
  //       if (currentIndex < membersArray.lenght) {
  //         return {
  //           value: membersArray[currentIndex++],
  //           done: false,
  //         }
  //       } else {
  //         return {
  //           done: true
  //         }
  //       }
  //     }
  //   }
  // }

  *[Symbol.iterator]() {
    for (const member of this.members) {
      yield member;
    }
  }
}

// Order props
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

// Extra attack info
function extractAttackInfo({ special }) {
  return special.map(({ id, name, description = 'Описание недоступно', icon }) => ({
    id,
    name,
    description,
    icon,
  }));
}

export { Team, orderByProps, extractAttackInfo }
