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

export {Character}
