import {Bowman} from "../classes/bowman"

it('Bowman should have correct properties', () => {
  const bowman = new Bowman('abc');
  expect(bowman.name).toBe('abc');
  expect(bowman.type).toBe('Bowman');
  const correct = {level: 1, attack: 40, defence: 10, health: 100, name: "abc", type: "Bowman"}
  expect(bowman).toEqual(correct);
})
