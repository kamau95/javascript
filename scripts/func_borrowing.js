let book = {
  title: "when the sun goes down",
  author: "john Gamma",
  info: function() {
    console.log(`${this.title} was written by ${this.author}`);
  }
}

let book1 = {
  title: "kidagaa kimemwozea",
  author: "Mamabotela"
}

let book3 = {
  title: "tumbo lisilo shiba",
  author: "magufuli kangoya",
};

book.info();
// function borrowing
//  reusing a method from one object in another object’s context
book.info.call(book1);
book.info.apply(book3);
