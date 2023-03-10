import {
	createHeader,
	createMain,
	backgroundImage,
	createFooter,
} from './headerBodyFooter.js';

function initWebsite() {
	const contentDiv = document.querySelector('#content');
	contentDiv.appendChild(createHeader());
	// contentDiv.appendChild(createNavbar());
	contentDiv.appendChild(createMain());
	contentDiv.appendChild(createFooter());
	backgroundImage();
}

initWebsite();
// homePage();
