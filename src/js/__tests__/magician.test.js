import {Magician} from "../classes/magician"

test('Magician should have correct properties', () => {
  const magician = new Magician('abc');
  const correct = {level: 1, attack: 10, defence: 40, health: 100, name: "abc", type: "Magician"}
  expect(magician).toEqual(correct);
});
