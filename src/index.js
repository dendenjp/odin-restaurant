import {
	createHeader,
	createMain,
	backgroundImage,
	createFooter,
} from './headerBodyFooter.js';
import { homePage } from './homepage.js';
import menuPage from './menu.js';
import contactPage from './contact.js';
import { home as homeTab } from './homepage.js';
import { menu as menuTab } from './menu.js';
import { contact as contactTab } from './contact.js';

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

	mainContent.appendChild(home);
	mainContent.appendChild(menu);
	mainContent.appendChild(contact);

	const homeBtn = document.querySelector('.home');
	const menuBtn = document.querySelector('.menu');
	const contactBtn = document.querySelector('.contact');
	menuTab.style.display = 'none';
	contactTab.style.display = 'none';
	// menuBtn.classList.add('active');
	console.log(menuTab);

	homeBtn.addEventListener('click', () => {
		homeTab.style.display = 'flex';
		menuTab.style.display = 'none';
		contactTab.style.display = 'none';

		homeBtn.classList.add('active');
		menuBtn.classList.remove('active');
		contactBtn.classList.remove('active');
	});

	menuBtn.addEventListener('click', () => {
		homeTab.style.display = 'none';
		menuTab.style.display = 'flex';
		contactTab.style.display = 'none';

		homeBtn.classList.remove('active');
		menuBtn.classList.add('active');
		contactBtn.classList.remove('active');
	});

	contactBtn.addEventListener('click', () => {
		homeTab.style.display = 'none';
		menuTab.style.display = 'none';
		contactTab.style.display = 'flex';

		homeBtn.classList.remove('active');
		menuBtn.classList.remove('active');
		contactBtn.classList.add('active');
	});
}

initWebsite();

// homePage();
