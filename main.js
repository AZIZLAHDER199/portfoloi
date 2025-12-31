document.addEventListener('DOMContentLoaded', function(){
	const menu = document.getElementById('menu');
	const navbar = document.querySelector('.navbar');

	if(menu && navbar){
		menu.addEventListener('click', function(){
			navbar.classList.toggle('active');
			this.classList.toggle('bx-x');
		});

		document.querySelectorAll('.navbar a').forEach(function(link){
			link.addEventListener('click', function(){
				if(navbar.classList.contains('active')){
					navbar.classList.remove('active');
					menu.classList.remove('bx-x');
				}
			});
		});
	}
});
const typed = new Typed('.multi-text', {
	strings: ["étudiant en science des données", "développeur backend"],
	typeSpeed: 50,
	backSpeed: 30,
	loop: true,
});
