const navMenu = document.querySelector('#more');
const exitMore = document.querySelector('#exit-more');
const moreLinks = document.querySelector('.more-links');

navMenu.addEventListener('click', (e) => {
	e.preventDefault(); 
	toggleMenu();
});

exitMore.addEventListener('click', (e) => {
	e.preventDefault(); 
	exitMenu();
});

function toggleMenu() {
	moreLinks.classList.toggle('active');
};

function exitMenu() {
	moreLinks.classList.remove('active');
};