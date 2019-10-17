/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

// https://blog.bitsrc.io/understanding-javascripts-prototypal-inheritance-354292253bcb

// function GameObject(attributes) {
//   this.createdAt = attributes.createdAt;
//   this.name = attributes.name;
//   this.dimensions = attributes.dimensions;
// }
// GameObject.prototype.destroy = function() {
//   return `${this.name} dies slowly...`;
// };

// function CharacterStats(attributes) {
//   this.healthPoints = attributes.healthPoints;
//   GameObject.call(this, attributes);
// }

// CharacterStats.prototype = Object.create(GameObject.prototype);
// CharacterStats.prototype.takeDamage = function() {
//   return `${this.name} took damage!`;
// };

// function Humanoid(attributes) {
//   this.team = attributes.team;
//   this.weapons = attributes.weapons;
//   this.language = attributes.language;
//   CharacterStats.call(this, attributes);
// }
// Humanoid.prototype = Object.create(CharacterStats.prototype);

// Humanoid.prototype.greet = function() {
//   return `${this.name} offers a greeting in ${this.language}`;
// };

class GameObject {
  constructor(attributes) {
    this.createdAt = attributes.createdAt;
    this.name = attributes.name;
    this.dimensions = attributes.dimensions;
  }
  destroy() {
    return `${this.name} dies slowly...`;
  }
}
class CharacterStats extends GameObject {
  constructor(attributes) {
    super(attributes);
    this.healthPoints = attributes.healthPoints;
  }
  takeDamage() {
    return `${this.name} took damage!`;
  }
}
class Humanoid extends CharacterStats {
  constructor(attributes) {
    super(attributes);
    this.team = attributes.team;
    this.weapons = attributes.weapons;
    this.language = attributes.language;
  }
  greet() {
    return `${this.name} offers a greeting in ${this.language}`;
  }
}

class Hero extends Humanoid {
  constructor(attributes) {
    super(attributes);
  }
  removeHp() {
    this.healthPoints--;
    return this.healthPoints > 0
      ? console.log(`${this.name} lost health. HP: ${this.healthPoints}`)
      : this.destroy();
  }
}

const mage = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 1,
    height: 1
  },
  healthPoints: 5,
  name: "Cam",
  team: "Mage Guild",
  weapons: ["Staff of Shama"],
  language: "Common Tongue"
});

const swordsman = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 2
  },
  healthPoints: 15,
  name: "Will",
  team: "The Round Table",
  weapons: ["Giant Sword", "Shield"],
  language: "Common Tongue"
});

const archer = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4
  },
  healthPoints: 10,
  name: "Braden",
  team: "Forest Kingdom",
  weapons: ["Long Bow", "Dagger"],
  language: "Elvish"
});

const villain = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4
  },
  healthPoints: 12,
  name: "Matt",
  team: "Prom Crasher",
  weapons: ["Dagger", "Dagger+"],
  language: ["Common Tongue", "Hidden"]
});

const bestFriend = new Hero({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 3
  },
  healthPoints: 15,
  name: "Paulyboy",
  team: "Say10",
  weapons: ["Short Sword", "Longbow", "Shield"]
});

console.log(Humanoid);
console.log(CharacterStats);
console.log(GameObject);
console.log(mage.createdAt); // Today's date
console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
console.log(swordsman.healthPoints); // 15
console.log(mage.name); // Cam
console.log(swordsman.team); // The Round Table
console.log(mage.weapons); // Staff of Shamalama
console.log(archer.language); // Elvish
bestFriend.removeHp();
bestFriend.removeHp();
bestFriend.removeHp();
bestFriend.removeHp();
bestFriend.removeHp();
bestFriend.removeHp();
bestFriend.removeHp();
bestFriend.removeHp();
bestFriend.removeHp();
bestFriend.removeHp();
bestFriend.removeHp();
bestFriend.removeHp();
bestFriend.removeHp();
bestFriend.removeHp();
bestFriend.removeHp();
bestFriend.removeHp();
bestFriend.removeHp();
bestFriend.removeHp();
