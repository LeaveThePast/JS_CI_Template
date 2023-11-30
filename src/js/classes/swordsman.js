import { Character } from "./character";

class Swordsman extends Character {
  constructor(name) {
    super(name, "Swordsman");
    this.attack = 40;
    this.defence = 10;
  }
}

export {Swordsman}
