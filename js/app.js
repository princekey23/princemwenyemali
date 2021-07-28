const lightbulb = document.getElementById('menu-button');
const bluemoon = document.getElementById('menu-button2');

lightbulb.addEventListener('click',()=>{
  document.body.classList.add('open');
});

bluemoon.addEventListener('click', ()=>{
  document.body.classList.remove('open');
})
