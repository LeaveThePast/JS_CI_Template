import read from "./reader";
import json from "./parser";

class GameSaving {
  constructor(data) {
    this.id = data.id;
    this.created = data.created;
    this.userInfo = data.userInfo;
  }
}

export default class GameSavingLoader {
  static async load(inputData) {
    try {
      const data = await read(inputData);
      const value = await json(data);
      return value;
    } catch (error) {
      throw new Error(`Error loading game saving: ${error.message}`);
    }
  }
}

// const data = '{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}';
// (async () => {
//   try {
//     const saving = await GameSavingLoader.load();
//     console.log('Game saving loaded:', saving);
//   } catch (error) {
//     console.error('Error:', error.message);
//   }
// })();

export { GameSaving, GameSavingLoader }
