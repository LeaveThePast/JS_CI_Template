import { Team } from "../app";
import { Character } from "../classes/character";
import { orderByProps, extractAttackInfo } from "../app";

describe("Team", () => {
  it("shoud add a character in team", () => {
    const team = new Team();
    const character = new Character("abc", "Bowman");
    team.add(character)
    expect(team.members.has(character)).toBeTruthy();
  });

  it("shoud drop an error when try to add same character twice", () => {
    const team = new Team();
    const character = new Character("abc", "Bowman");
    team.add(character)
    expect(() => team.add(character)).toThrow("Такой персонаж уже есть в команде");
  });

  it('should add characters in team', () => {
    const team = new Team();
    const character1 = new Character('abc', 'Bowman');
    const character2 = new Character('abcd', 'Bowman');
    team.addAll(character1, character2);
    const correctResult = new Set([character1, character2]);
    expect(team.members).toEqual(correctResult);
  });

  it("should convert Set to Array", () => {
    const team = new Team();
    const character1 = new Character('abc', 'Bowman');
    const character2 = new Character('abcd', 'Bowman');
    team.addAll(character1, character2);
    const correctResult = [character1, character2];
    expect(team.toArray()).toEqual(correctResult);
  });

  it('should iterate over team members using iterator', () => {
    const myTeam = new Team();
    myTeam.addAll("abc", "abcd", "abcde");
    const iterator = myTeam[Symbol.iterator]();
    expect(iterator.next()).toEqual({ value: 'abc', done: false });
    expect(iterator.next()).toEqual({ value: 'abcd', done: false });
    expect(iterator.next()).toEqual({ value: 'abcde', done: false });
    expect(iterator.next()).toEqual({ done: true });
  });
});


it('orderByProps should return sorted array of object properties', () => {
  const obj = { name: 'Swordsman', health: 10, level: 2, attack: 80, defence: 40 };
  const order = ["name", "level"];

  const result = orderByProps(obj, order);

  expect(result).toEqual([
    { key: "name", value: "Swordsman" },
    { key: "level", value: 2 },
    { key: "attack", value: 80 },
    { key: "defence", value: 40 },
    { key: "health", value: 10 }
  ]);
});


it('extractAttackInfo should return array with default description if not available', () => {
  const character = {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 3,
    attack: 40,
    defence: 10,
    special: [
      {
        id: 8,
        name: 'Двойной выстрел',
        icon: 'http://...',
        description: 'Двойной выстрел наносит двойной урон',
      },
      {
        id: 9,
        name: 'Нокаутирующий удар',
        icon: 'http://...',
      },
    ],
  };

  const result = extractAttackInfo(character);

  expect(result).toEqual([
    {
      id: 8,
      name: 'Двойной выстрел',
      description: 'Двойной выстрел наносит двойной урон',
      icon: 'http://...',
    },
    {
      id: 9,
      name: 'Нокаутирующий удар',
      description: 'Описание недоступно',
      icon: 'http://...',
    },
  ]);
});



