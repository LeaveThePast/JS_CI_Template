class Character {
  constructor(name, type) {
    if (name.length < 2 || name.length > 10) {
      throw new Error("Имя должно содержать от двух до десяти символов")
    }
    const types = ["Bowman", "Swordsman", "Magician", "Undead", "Zombie", "Daemon"]
    if (!types.includes(type)) {
      throw new Error("Некорректный тип персонажа")
    }
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
  }

  levelUp() {
    if (this.health <= 0) {
      throw new Error("Нельзя повысить уровень умершего персонажа")
    }
    this.level += 1;
    this.attack *= 1.2;
    this.defence *= 1.2;
    this.health = 100;
  }

  damage(points) {
    if (this.health <= 0) {
      throw new Error("Нельзя нанести урон умершему персонажу")
    }
    this.health -= points * (1 - this.defence / 100)
  }
}

class Bowman extends Character {
  constructor(name) {
    super(name, "Bowman");
    this.attack = 40;
    this.defence = 10;
  }
}

class Swordsman extends Character {
  constructor(name) {
    super(name, "Swordsman");
    this.attack = 40;
    this.defence = 10;
  }
}

class Magician extends Character {
  constructor(name) {
    super(name, "Magician");
    this.attack = 10;
    this.defence = 40;
  }
}

class Undead extends Character {
  constructor(name) {
    super(name, "Undead");
    this.attack = 25;
    this.defence = 25;
  }
}

class Zombie extends Character {
  constructor(name) {
    super(name, "Zombie");
    this.attack = 40;
    this.defence = 10;
  }
}

class Daemon extends Character {
  constructor(name) {
    super(name, "Daemon");
    this.attack = 10;
    this.defence = 40;
  }
}

export { Character, Bowman, Swordsman, Magician, Undead, Zombie, Daemon };
