var myButton = document.getElementById('search-button');
var myLinks = document.querySelectorAll('nav-link');

	 // events

myButton.addEventListener('click', () =>{
    document.body.classList.toggle('nav-Open');
});

myLinks.forEach(link =>{
	link.addEventListener('click', () =>{
		document.body.classList.remove('nav-Open');
	})
});
