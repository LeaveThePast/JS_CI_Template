import {Daemon} from "../classes/daemon"

it('Daemon should have correct properties', () => {
  const daemon = new Daemon('abc');
  const correct = {level: 1, attack: 10, defence: 40, health: 100, name: "abc", type: "Daemon"}
  expect(daemon).toEqual(correct);
})
