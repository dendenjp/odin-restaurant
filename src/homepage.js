const home = document.createElement('div');
function homePage() {
	home.classList.add('tab-container');

	const h1 = document.createElement('h1');
	h1.textContent = 'Welcome to STARBUKO!';

	const p1 = document.createElement('p');
	p1.textContent = `– your one-stop-shop for the best buko juice in town! Our buko juice is made with the freshest young coconuts, ensuring that you get the natural sweetness and nutrients of this tropical fruit in every sip.`;
	const p2 = document.createElement('p');
	p2.textContent = `Whether you're looking for a refreshing drink on a hot day or a healthy beverage to accompany your meal, our buko juice is the perfect choice. With its smooth and creamy texture and delicious flavor, it's the ultimate thirst quencher.`;
	const p3 = document.createElement('p');
	p3.textContent = `So why wait?`;
	const p4 = document.createElement('p');
	p4.textContent = `Come visit STARBUKO today and taste the difference for yourself!`;

	const homeImageContainer = document.createElement('div');
	homeImageContainer.classList.add('home-image-container');
	console.log(homeImageContainer);

	const homeImage = document.createElement('img');
	homeImage.classList.add('home-image');
	homeImage.setAttribute('src', '../img/home-image.jpg');
	homeImageContainer.appendChild(homeImage);

	home.appendChild(h1);
	home.appendChild(p1);
	home.appendChild(p2);
	home.appendChild(homeImageContainer);
	home.appendChild(p3);
	home.appendChild(p4);

	return home;
}

export { homePage };
export { home };
