import { Character } from "./character";

class Zombie extends Character {
  constructor(name) {
    super(name, "Zombie");
    this.attack = 40;
    this.defence = 10;
  }
}

export {Zombie}
