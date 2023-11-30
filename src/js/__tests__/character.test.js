import {Character} from "../classes/character";
import {Bowman} from "../classes/bowman"

describe("Character", () => {
  it("should throw an error if name is too short", () => {
    expect(() => new Character("a", "Bowman")).toThrow("Имя должно содержать от двух до десяти символов");
  });

  it("should throw an error if name is too long", () => {
    expect(() => new Character("aaaaaaaaaaaa", "Bowman")).toThrow("Имя должно содержать от двух до десяти символов");
  });

  it("shoud throw an error if type is not exists", () => {
    expect(() => new Character("ab", "Rogue")).toThrow("Некорректный тип персонажа");
  });

  it("shoud create a character with correct properties", () => {
    const character = new Character("abc", "Bowman");
    const correct = {name: "abc", type: "Bowman", health: 100, level:1}
    expect(character).toEqual(correct);
  });
});

describe("Character methods", () => {
  it("levelUp shoud throw an error for a dead character", () => {
    const character = new Bowman("abc");
    character.health = 0;
    expect(() => character.levelUp()).toThrow("Нельзя повысить уровень умершего персонажа");
  });

  it("levelUp shoud be correct", () => {
    const character = new Bowman("abc");
    character.health = 80;
    character.levelUp();
    const correct = {level: 2, attack: 48, defence: 12, health: 100, name: "abc", type: "Bowman"}
    expect(character).toEqual(correct);
  })

  it("damage shoud throw an error for dead character", () => {
    const character = new Bowman("abc");
    character.health = 0;
    expect(() => character.damage(10)).toThrow("Нельзя нанести урон умершему персонажу");
  });

  it("damage shoud reduce health based on points and defence", () => {
    const character = new Bowman("abc");
    character.damage(10);
    expect(character.health).toEqual(91);
  });
});
