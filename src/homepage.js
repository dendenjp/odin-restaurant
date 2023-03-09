export default function homePage() {
	const contentDiv = document.querySelector('#content');
	console.log(contentDiv);

	const restaurantImg = document.createElement('img');
	restaurantImg.src = '../img/restaurant-image.png';
	restaurantImg.alt = 'Restaurant';

	const restaurantTitle = document.createElement('h1');
	restaurantTitle.textContent = 'Welcome to My Restaurant';

	const restaurantDesc = document.createElement('p');
	restaurantDesc.textContent = `We offer the most delicious cuisine you'll ever taste. Our chefs
    use only the freshest ingredients to create dishes that will
    leave you wanting more. Come dine with us and experience the
    magic of our restaurant.`;

	contentDiv.appendChild(restaurantImg);
	contentDiv.appendChild(restaurantTitle);
	contentDiv.appendChild(restaurantDesc);
}
