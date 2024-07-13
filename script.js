const message = document.querySelector('.text');
const add = document.getElementById('setter');
add.addEventListener('click', ()=>{
      message.textContent = "try be a happy soul tonight"
    });

const remove = document.getElementById('remover');
remove.addEventListener('click', ()=>{
    message.textContent = ""
});
