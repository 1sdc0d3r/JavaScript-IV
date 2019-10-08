class Person {
  constructor(name, city, state, address) {
    this.name = name;
    this.city = city;
    this.state = state;
    this.address = address;
  }
  display() {
    console.log(
      `${this.name} is from ${this.city}, ${this.state}. ${this.name} lives at ${this.address}`
    );
  }
}

class Group extends Person {
  constructor(name, city, state, address) {
    super(name, city, state, address);
  }
  display() {
    console.log(
      `${this.name} is not from ${this.city}, ${this.state}. ${this.name} doesn't live at ${this.address}`
    );
  }
}

const cooper = new Person("Cooper", "Ogden", "UT", "Old Town Road");

const notcooper = new Group("Coop", "Layton", "Wyoming", "Dirt Road");

// console.log(cooper);
// console.log(notcooper);

cooper.display();
notcooper.display();

class Grandparent {
  constructor(name, birthPlace, eyeColor, hairColor) {
    this.name = name;
    this.birthPlace = birthPlace;
    this.eyeColor = eyeColor;
    this.hairColor = hairColor;
  }
  speak() {
    console.log(
      `${this.name} was born in ${this.birthPlace}. ${this.name} has ${this.eyeColor} eyes and ${this.hairColor} hair.`
    );
  }
}
class Parent extends Grandparent {
  constructor(name, birthPlace, eyeColor, hairColor) {
    super(name, birthPlace, eyeColor, hairColor);
  }
  speak() {
    console.log(
      `${this.name} was born in ${this.birthPlace}. ${this.name} has ${this.eyeColor} eyes and ${this.hairColor} hair.`
    );
  }
}
class Child extends Parent {
  constructor(name, birthPlace, eyeColor, hairColor) {
    super(name, birthPlace, eyeColor, hairColor);
  }
  speak() {
    console.log(
      `${this.name} was born in ${this.birthPlace}. ${this.name} has ${this.eyeColor} eyes and ${this.hairColor} hair.`
    );
  }
}

const max = new Grandparent("Max", "Kamas", "brown", "bald");
const sharla = new Parent("Mom", "Morgan", "brown", "long brown");
const colten = new Child("Colten", "Ogden", "green", "sandybrown");

// console.log(Grandparent);
// console.log(Parent);
// console.log(Child);
max.speak();
sharla.speak();
colten.speak();
