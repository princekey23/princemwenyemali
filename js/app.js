var myButton = document.querySelector('#menu_button');
var myLinks = document.querySelectorAll('.item_links')

myButton.addEventListener('click', () =>{
    document.body.classList.toggle('nav-Open');
});
myLinks.addEventListener('click', () =>{
    document.body.classList.remove('nav-Open');
});