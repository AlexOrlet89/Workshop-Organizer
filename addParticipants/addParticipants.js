import { getWorkshops, createParticipant } from '../fetch-utils.js';
const workshopId = document.getElementById('workshop_id');
const form = document.getElementById('form');

console.log('option');

window.addEventListener('load', async () => {
    const workshops = await getWorkshops();
    for (let workshop of workshops) {
        const option = document.createElement('option');
        option.textContent = `${workshop.name}`;
        option.value = `${workshop.id}`;
        workshopId.append(option);
    }
});

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const name = formData.get('name');
    const contact = formData.get('contact');
});