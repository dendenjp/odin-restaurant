import {
	createHeader,
	createMain,
	backgroundImage,
	createFooter,
} from './headerBodyFooter.js';
import { homePage } from './homepage.js';
import menuPage from './menu.js';
import contactPage from './contact.js';

function initWebsite() {
	backgroundImage();
	const contentDiv = document.querySelector('#content');

	const headerContent = createHeader();
	const mainContent = createMain();
	const footerContent = createFooter();

	const home = homePage();
	const menu = menuPage();
	const contact = contactPage();

	contentDiv.appendChild(headerContent);
	contentDiv.appendChild(mainContent);
	contentDiv.appendChild(footerContent);

	const homeBtn = document.querySelector('.home');
	const menuBtn = document.querySelector('.menu');
	const contactBtn = document.querySelector('.contact');

	mainContent.appendChild(home);

	homeBtn.addEventListener('click', () => {
		mainContent.innerHTML = '';
		mainContent.appendChild(home);

		homeBtn.classList.add('active');
		menuBtn.classList.remove('active');
		contactBtn.classList.remove('active');
	});

	menuBtn.addEventListener('click', () => {
		mainContent.innerHTML = '';
		mainContent.appendChild(menu);

		homeBtn.classList.remove('active');
		menuBtn.classList.add('active');
		contactBtn.classList.remove('active');
	});

	contactBtn.addEventListener('click', () => {
		mainContent.innerHTML = '';
		mainContent.appendChild(contact);

		homeBtn.classList.remove('active');
		menuBtn.classList.remove('active');
		contactBtn.classList.add('active');
	});
}

initWebsite();
