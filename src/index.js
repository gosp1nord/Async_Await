import json from './parser.js';
import read from './reader.js';

class GameSavingLoader {
  static async load() {
    this.buffer = await read();
    this.strObj = await json(this.buffer);
    return this.strObj;
  }
}

(async () => {
  const saving = await GameSavingLoader.load();
  console.log('saving -', saving);
})();
