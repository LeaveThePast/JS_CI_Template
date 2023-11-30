import { Character } from "./character";

class Bowman extends Character {
  constructor(name) {
    super(name, "Bowman");
    this.attack = 40;
    this.defence = 10;
  }
}

export {Bowman}
