import { GameSavingLoader } from "../saving";

describe('GameSavingLoader', () => {
  const data = '{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}';
  it('should load game saving data', async () => {
    const saving = await GameSavingLoader.load(data);
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
