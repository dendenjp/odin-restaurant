import homePage from './homepage.js';
console.log('test');
function backgroundImage() {
	const body = document.querySelector('body');
	body.style.backgroundImage = 'url("../img/background-image.jpg")';
	body.style.backgroundSize = 'cover';
	body.style.backgroundRepeat = 'no-repeat';
	body.style.backgroundAttachment = 'fixed';
	// body.style.filter = 'brightness(0)';

	body.style.backgroundPosition = 'center';

	const overlay = document.createElement('div');
	overlay.style.position = 'fixed';
	overlay.style.top = '0';
	overlay.style.left = '0';
	overlay.style.width = '100%';
	overlay.style.height = '100%';
	overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';

	body.appendChild(overlay);
}

backgroundImage();
// homePage();
