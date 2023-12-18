import { Character } from "./character";

class Daemon extends Character {
  constructor(name) {
    super(name, "Daemon");
    this._attack = 10;
    this.defence = 40;
    this._stoned = false;
  }

  get attack() {
    return this._attack
  }

  set attack(distance) {
    let attack = this._attack
    if (distance > 1) {
      attack = this._attack * (1 - ((distance - 1) / 10));
    }
    if (this.stoned) {
      attack -= Math.log2(distance) * 5;
    }
    this._attack = attack;
  }

  get stoned() {
    return this._stoned;
  }

  set stoned(value) {
    this._stoned = value;
  }
}


export {Daemon}
