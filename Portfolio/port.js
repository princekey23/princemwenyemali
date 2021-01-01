var myButton = document.querySelector('#menu_icon');
var myLinks = document.querySelectorAll('.nav_link');
   
	 // events
	 
myButton.addEventListener('click', () =>{
    document.body.classList.toggle('nav-Open');
});

myLinks.forEach(link =>{
	link.addEventListener('click', () =>{
		document.body.classList.remove('nav-Open');
	})
});