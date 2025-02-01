class Animal {
  name = 'animal';

  constructor() {
    console.log(this.name); // (*)
  }
}

class Rabbit extends Animal {
  name = 'rabbit';
}

new Animal(); // animal
new Rabbit(); //animal


class Animal1 {
  name = 'animal';

  constructor() {
    console.log(this.name);  // This uses the instance's 'name' field
  }
}

class Rabbit1 extends Animal1 {
  name = 'rabbit';  // Shadowing the 'name' field from Animal
}

let rabbit = new Rabbit1();// animal 
