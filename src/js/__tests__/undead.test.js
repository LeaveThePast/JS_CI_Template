import {Undead} from "../classes/undead"

it('Undead should have correct properties', () => {
  const undead = new Undead('abc');
  const correct = {level: 1, attack: 25, defence: 25, health: 100, name: "abc", type: "Undead"}
  expect(undead).toEqual(correct);
})
