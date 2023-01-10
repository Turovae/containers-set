export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    if (this.members.has(character)) {
      throw new Error('Error! Adding an existing character');
    }
    this.members.add(character);
  }

  addAll(...characters) {
    this.members = new Set([...this.members.keys(), ...characters]);
  }

  toArray() {
    return Array.from(this.members.keys());
  }
}
