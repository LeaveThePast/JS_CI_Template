import {Zombie} from "../classes/zombie"

it('Zombie should have correct properties', () => {
  const zombie = new Zombie('abc');
  const correct = {level: 1, attack: 40, defence: 10, health: 100, name: "abc", type: "Zombie"}
  expect(zombie).toEqual(correct);
});
