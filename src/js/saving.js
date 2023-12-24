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
  static async load() {
    try {
      const data = await read();
      const value = await json(data);
      return value;
    } 
    catch (error) {
      throw new Error(`Error loading game saving: ${error.message}`);
    }
  }
}

// (async () => {
//   try {
//     const saving = await GameSavingLoader.load();
//     console.log('Game saving loaded:', saving);
//   } catch (error) {
//     console.error('Error:', error.message);
//   }
// })();

export { GameSaving, GameSavingLoader }
