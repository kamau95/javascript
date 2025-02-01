const myButton = {
  content: "download",
  click() {
    console.log(`${this.content} button has been clicked`)
  }
};

myButton.click();

const looseClick = myButton.click; // not bound, 'this' is not myButton - it is the globalThis
looseClick();

const boundClick = myButton.click.bind(myButton);
boundClick();

const person = {
  firstName: "John",
  lastName: "Doe",
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}

  let  member = {
  firstName: "Hege",
  lastName: "Nilsen"
};

// Use bind to set the context of the person.fullName method to the member object
let fullNameBound = person.fullName.bind(member);

console.log(fullNameBound()); // Output: Hege Nilsen
