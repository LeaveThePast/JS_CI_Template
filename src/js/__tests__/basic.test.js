import * as Characters from "../basic";

describe("Character", () => {
  it("should throw an error if name is too short", () => {
    expect(() => new Characters.Character("a", "Bowman")).toThrow("Имя должно содержать от двух до десяти символов");
  });

  it("should throw an error if name is too long", () => {
    expect(() => new Characters.Character("aaaaaaaaaaaa", "Bowman")).toThrow("Имя должно содержать от двух до десяти символов");
  });

  it("shoud throw an error if type is not exists", () => {
    expect(() => new Characters.Character("ab", "Rogue")).toThrow("Некорректный тип персонажа");
  });

  it("shoud create a character with correct properties", () => {
    const character = new Characters.Character("abc", "Bowman");
    expect(character.name).toEqual("abc");
    expect(character.type).toEqual("Bowman");
    expect(character.health).toEqual(100);
    expect(character.level).toEqual(1);
  });
});

describe("Character methods", () => {
  it("levelUp shoud throw an error for a dead character", () => {
    const character = new Characters.Bowman("abc");
    character.health = 0;
    expect(() => character.levelUp()).toThrow("Нельзя повысить уровень умершего персонажа");
  });

  it("levelUp shoud be correct", () => {
    const character = new Characters.Bowman("abc");
    character.health = 80;
    character.levelUp();
    expect(character.level).toEqual(2);
    expect(character.attack).toEqual(48);
    expect(character.defence).toEqual(12);
    expect(character.health).toEqual(100);
  })

  it("damage shoud throw an error for dead character", () => {
    const character = new Characters.Bowman("abc");
    character.health = 0;
    expect(() => character.damage(10)).toThrow("Нельзя нанести урон умершему персонажу");
  });

  it("damage shoud reduce health based on points and defence", () => {
    const character = new Characters.Bowman("abc");
    character.damage(10);
    expect(character.health).toEqual(91);
  });
});

describe('Character classes', () => {
  it('Bowman should have correct properties', () => {
    const bowman = new Characters.Bowman('Bowman1');
    expect(bowman.name).toBe('Bowman1');
    expect(bowman.type).toBe('Bowman');
    expect(bowman.attack).toBe(40);
    expect(bowman.defence).toBe(10);
  });

  it('Swordsman should have correct properties', () => {
    const swordsman = new Characters.Swordsman('Swordsman1');
    expect(swordsman.name).toBe('Swordsman1');
    expect(swordsman.type).toBe('Swordsman');
    expect(swordsman.attack).toBe(40);
    expect(swordsman.defence).toBe(10);
  });

  test('Magician should have correct properties', () => {
    const magician = new Characters.Magician('Magician1');
    expect(magician.name).toBe('Magician1');
    expect(magician.type).toBe('Magician');
    expect(magician.attack).toBe(10);
    expect(magician.defence).toBe(40);
  });

  it('Undead should have correct properties', () => {
    const undead = new Characters.Undead('Undead1');
    expect(undead.name).toBe('Undead1');
    expect(undead.type).toBe('Undead');
    expect(undead.attack).toBe(25);
    expect(undead.defence).toBe(25);
  });

  it('Zombie should have correct properties', () => {
    const zombie = new Characters.Zombie('Zombie1');
    expect(zombie.name).toBe('Zombie1');
    expect(zombie.type).toBe('Zombie');
    expect(zombie.attack).toBe(40);
    expect(zombie.defence).toBe(10);
  });

  it('Daemon should have correct properties', () => {
    const daemon = new Characters.Daemon('Daemon1');
    expect(daemon.name).toBe('Daemon1');
    expect(daemon.type).toBe('Daemon');
    expect(daemon.attack).toBe(10);
    expect(daemon.defence).toBe(40);
  });
});
