//fetchng user github data from api then removing the profile image after 10 secs
fetch('https://api.github.com/users/kamau95')
  .then( response => response.json())
  .then( git_user => new Promise( (resolve) => {
    let img = document.createElement('img');
    img.src = git_user.avatar_url;
    img.className = "github-avatar";
    document.body.append(img);

    setTimeout( () => {
      img.remove();
      resolve(git_user);
    }, 10000)
  }))
  .then( (user) => {
    console.log("user data is: ", user)
  })
  .catch( (error) => {
    console.log("fetching resulted to error:", error)
  })

