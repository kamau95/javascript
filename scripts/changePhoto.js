// change photo on a page using an event listener
  const myPhoto = document.querySelector("img");
  myPhoto.onclick = ( ()=> {
    const mysrc = myPhoto.getAttribute("src");
    if (mysrc === "images/pic1.png") {
      myPhoto.setAttribute("src", "images/pic2.png")
    } else {
      myPhoto.setAttribute("src", "images/pic1.png")
    }
  });
