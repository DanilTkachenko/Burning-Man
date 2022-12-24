let btn = document.querySelector('.burger-btn');
const menu = document.querySelector('.menu');

btn.addEventListener('click', function() {
	btn.classList.toggle('active');
	menu.classList.toggle('active');
	document.body.classList.toggle('overflow-hidden');
});