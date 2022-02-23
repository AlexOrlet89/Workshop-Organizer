import { getWorkshops } from '../fetch-utils.js';

const form = document.getElementById('form');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const name = formData.get('name');
    const contact = formData.get('contact');
});