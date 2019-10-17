class Person {
  constructor(attrs) {
    this.name = attrs.name;
    this.age = attrs.age;
    this.location = attrs.location;
  }
  speak() {
    console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
  }
}

class Instructor extends Person {
  constructor(attrs) {
    super(attrs);
    this.specialty = attrs.specialty;
    this.favLanguage = attrs.favLanguage;
    this.catchPhrase = attrs.catchPhrase;
  }
  demo(subjectStr) {
    console.log(`Today we are learning about ${subjectStr}`);
  }
  grade(student, subjectStr) {
    console.log(`${student.name} receives a perfect score on ${subjectStr}`);
  }
}

class Student extends Person {
  constructor(attrs) {
    super(attrs);
    this.previousBackground = attrs.previousBackground;
    this.className = attrs.className;
    this.favSubjects = attrs.favSubjects;
  }
  listsSubjects() {
    for (let i = 0; i < this.favSubjects.length; i++) {
      console.log(this.listsSubjects[i]);
    }
  }
  PRAssignment(subject) {
    console.log(`${this.name} has submitted a PR for ${subject}`);
  }
  sprintChallenge(subject) {
    console.log(`${this.name} has begun sprint challenge on ${subject}`);
  }
}

class ProjectManager extends Instructor {
  constructor(attrs) {
    super(attrs);
    this.gradClassName = attrs.gradClassName;
    this.favInstructor = attrs.favInstructor;
  }
  standUp(channel) {
    console.log(`${this.name} announces to ${channel}, @channel standby times`);
  }
  debugsCode(student, subject) {
    console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
  }
}

const andrew = new Student({
  name: "Andrew",
  location: "Home",
  age: "yung man",
  favLanguage: "French",
  previousBackground: "Farmer",
  className: "WEB25",
  favSubjects: [["HTML"], ["CSS"], ["Javascript"]]
});

const chase = new Student({
  name: "Chase",
  location: "B&B",
  age: "25",
  favLanguage: "German",
  previousBackground: "Mechanic",
  className: "web25",
  favSubjects: [["Sarah"], ["Cooking"], ["offroading"]]
});

const britt = new Instructor({
  name: "Britt",
  location: "Canada",
  age: "n/a",
  specialty: "talking",
  favLanguage: "Dutch",
  catchPhrase: "times up"
});

const matt = new Instructor({
  name: "Matt",
  location: "Iceland",
  age: "who knows",
  specialty: "helping",
  favLanguage: "German",
  catchPhrase: "You got this!"
});

const gerald = new ProjectManager({
  name: "Gerald",
  location: "Garden",
  age: "60",
  gradClassName: "WEB 4",
  favInstructor: "Sean",
  specialty: "cooking",
  favLanguage: "Italian",
  catchPhrase: "Pitter Patter"
});

const cameron = new ProjectManager({
  name: "Cameron",
  location: "SLC",
  age: "19",
  gradClassName: "WEB 83",
  favInstructor: "Jack",
  specialty: "driving",
  favLanguage: "Hooligan",
  catchPhrase: "lets do more!"
});

andrew.speak();
britt.demo("Class Constructors");
matt.grade(andrew, "TESTTT");
chase.PRAssignment("Mathy");
andrew.sprintChallenge("sprint challenge DOM");
gerald.standUp("WEB25 Metal");
cameron.debugsCode(andrew, "English");
