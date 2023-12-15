import { Team } from "../app";
import { Character } from "../classes/character";

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
});
