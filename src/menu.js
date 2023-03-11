function menuPage() {
	const menu = document.createElement('div');
	menu.classList.add('tab-container');

	const h1 = document.createElement('h1');
	h1.textContent = 'Our Menu';

	const itemsList = document.createElement('ul');

	const item1 = document.createElement('li');
	item1.textContent = 'Buko Juice – Small/Medium/Large';
	const item2 = document.createElement('li');
	item2.textContent = 'Buko-Pandan Juice – Small/Medium/Large';
	const item3 = document.createElement('li');
	item3.textContent = 'Buko-Shake – Small/Medium/Large';
	const item4 = document.createElement('li');
	item4.textContent = 'Buko-Sago – Small/Medium/Large';
	const item5 = document.createElement('li');
	item5.textContent = 'Buko-Lychee – Small/Medium/Large';

	itemsList.appendChild(item1);
	itemsList.appendChild(item2);
	itemsList.appendChild(item3);
	itemsList.appendChild(item4);
	itemsList.appendChild(item5);

	menu.appendChild(h1);
	menu.appendChild(itemsList);

	return menu;
}

export default menuPage;
