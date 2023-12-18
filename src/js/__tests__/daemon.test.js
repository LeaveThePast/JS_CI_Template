import { Daemon } from "../classes/daemon";

describe('Daemon', () => {
  it('should have correct properties', () => {
    const daemon = new Daemon('abc');
    const correct = { level: 1, _attack: 10, defence: 40, health: 100, name: "abc", type: "Daemon", _stoned: false } // change this line
    expect(daemon).toEqual(correct);
  });

  it('should correctly calculate attack based on distance', () => {
    const daemon = new Daemon('abc');
    daemon.attack = 2;
    expect(daemon._attack).toBeCloseTo(9); // expected attack is 10 * (1 - (2 - 1) / 10) = 9
  });

  it('should correctly calculate attack based on distance and stoned', () => {
    const daemon = new Daemon('abc');
    daemon.stoned = true;
    daemon.attack = 2; // set distance to 2
    expect(daemon.attack).toBeCloseTo(4); // expected attack is 9 - log2(2) * 5 = 4
  });

  it('should correctly set and get stoned property', () => {
    const daemon = new Daemon('abc');
    daemon.stoned = true;
    expect(daemon.stoned).toBe(true);
  });
});
