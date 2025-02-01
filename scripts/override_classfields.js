class Animal {
  name = 'animal';  // Class field in parent
  
  constructor() {
    // You can initialize other fields or perform logic here
    console.log('Animal created');
  }
}

class Rabbit extends Animal {
  constructor(name, color) {
    super();  // Calls parent class constructor to initialize parent fields (like 'name')
    this.name = name;  // Overwrites parent class field with the child class value
    this.color = color;  // Initializes the color field for the child class
    console.log(`${this.name} is ${this.color}`);
  }
}

const rabbit = new Rabbit('Bunny', 'white');  // Output: 'Bunny is white'

