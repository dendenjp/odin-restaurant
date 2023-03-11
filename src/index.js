import {
	createHeader,
	createMain,
	backgroundImage,
	createFooter,
} from './headerBodyFooter.js';
import { homePage } from './homepage.js';

function initWebsite() {
	const contentDiv = document.querySelector('#content');
	const headerContent = createHeader();
	const mainContent = createMain();
	const footerContent = createFooter();
	const home = homePage();

	contentDiv.appendChild(headerContent);
	contentDiv.appendChild(mainContent);
	contentDiv.appendChild(footerContent);

	mainContent.appendChild(home);
	backgroundImage();
}

initWebsite();
// homePage();
