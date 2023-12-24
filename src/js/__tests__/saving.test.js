import { GameSaving, GameSavingLoader } from "../saving";

describe('GameSavingLoader', () => {
  it("should create correct saving GameSaving", () => {
    const data = {
      id: 9,
      created: 1546300800,
      userInfo: {
        id: 1,
        name: 'Hitman',
        level: 10,
        points: 2000,
      }
    }
    expect(new GameSaving(data)).toEqual(data)
  })
  it('should load game saving data', async () => {
    const saving = await GameSavingLoader.load();
    expect(saving).toEqual({
      id: 9,
      created: 1546300800,
      userInfo: {
        id: 1,
        name: 'Hitman',
        level: 10,
        points: 2000,
      },
    });
  });
});
