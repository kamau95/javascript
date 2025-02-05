class Animal {
  constructor(name) {
    this.name = name;
  }

  sayHi() {
    console.log(`hello ${this.name}`)
  }
}

class Mammal extends Animal {
  constructor(name, age) {
    super(name);
    this.name = name;
    this.age = age;
  }

  greetings() {
    console.log(`hello ${this.name}`);
  }
}

let animalMixin = {
  describe() {
    console.log(`hello there i am ${this.name} i am ${this.age} yrs old`);
  },
};

Object.assign(Mammal.prototype, animalMixin);

let bat = new Mammal("katozi", 6);
bat.describe();
