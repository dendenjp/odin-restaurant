function contactPage() {
	const contact = document.createElement('div');
	contact.classList.add('tab-container');

	const h1 = document.createElement('h1');
	h1.textContent = 'Contact Us';

	const p1 = document.createElement('p');
	p1.textContent = 'Visit us at:';
	const p2 = document.createElement('p');
	p2.textContent = '1234 Buena Vista St., Makati City';
	const p3 = document.createElement('p');
	p3.textContent = 'Email us at:';
	const p4 = document.createElement('p');
	p4.textContent = 'starbuko@bukojuice.com';
	const p5 = document.createElement('p');
	p5.textContent = 'Call us at:';
	const p6 = document.createElement('p');
	p6.textContent = '123-456-7890';

	contact.appendChild(h1);
	contact.appendChild(p1);
	contact.appendChild(p2);
	contact.appendChild(p3);
	contact.appendChild(p4);
	contact.appendChild(p5);
	contact.appendChild(p6);

	return contact;
}

export default contactPage;
