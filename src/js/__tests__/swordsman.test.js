import {Swordsman} from "../classes/swordsman"

it('Swordsman should have correct properties', () => {
  const swordsman = new Swordsman('abc');
  const correct = {level: 1, attack: 40, defence: 10, health: 100, name: "abc", type: "Swordsman"}
  expect(swordsman).toEqual(correct);
})
