import {
	createHeader,
	createNavbar,
	backgroundImage,
} from './headerBodyFooter.js';

function initWebsite() {
	const contentDiv = document.querySelector('#content');
	contentDiv.appendChild(createHeader());
	// contentDiv.appendChild(createNavbar());
}

initWebsite();
backgroundImage();
// homePage();
