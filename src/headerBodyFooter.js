function backgroundImage() {
	const body = document.querySelector('body');
	body.style.backgroundImage = 'url("../img/background-image Cropped.jpg")';
	body.style.backgroundSize = 'cover';
	body.style.backgroundRepeat = 'no-repeat';
	body.style.backgroundAttachment = 'fixed';

	const overlay = document.createElement('div');
	overlay.style.position = 'fixed';
	overlay.style.top = '0';
	overlay.style.left = '0';
	overlay.style.width = '100%';
	overlay.style.height = '100%';
	overlay.style.backgroundColor = 'rgba(0,0,0,0.3)'; //rgba(0,0,0,0.3)
	overlay.style.zIndex = '-1';
	body.appendChild(overlay);
}

function createHeader() {
	const header = document.createElement('header');
	header.classList.add('header');

	const restaurantName = document.createElement('h1');
	restaurantName.classList.add('restaurant-name');
	restaurantName.textContent = 'STARBUKO';

	header.appendChild(restaurantName);
	header.appendChild(createNavbar());
	return header;
}

function createNavbar() {
	const nav = document.createElement('nav');
	nav.classList.add('navbar');

	const ul = document.createElement('ul');
	ul.classList.add('navbar-list');

	const homeLi = document.createElement('li');
	homeLi.classList.add('navbar-item', 'home', 'active');

	const menuLi = document.createElement('li');
	menuLi.classList.add('navbar-item', 'menu');

	const contactLi = document.createElement('li');
	contactLi.classList.add('navbar-item', 'contact');

	homeLi.textContent = 'Home';
	menuLi.textContent = 'Menu';
	contactLi.textContent = 'Contact Us!';

	ul.appendChild(homeLi);
	ul.appendChild(menuLi);
	ul.appendChild(contactLi);

	nav.appendChild(ul);
	return nav;
}

function createMain() {
	const main = document.createElement('main');
	main.classList.add('main-container');

	return main;
}

function createFooter() {
	const footer = document.createElement('footer');
	footer.classList.add('footer');

	const h1 = document.createElement('h1');
	h1.textContent = '© 2023 Starbuko Company. All rights reserved';
	footer.appendChild(h1);
	return footer;
}

export { createHeader, createMain, createFooter, backgroundImage };
