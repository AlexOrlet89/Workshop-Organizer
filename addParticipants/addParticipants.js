import { getWorkshops, logout, createParticipant, checkAuth } from '../fetch-utils.js';
const workshopId = document.getElementById('workshop_id');
const form = document.getElementById('form');
const logoutButton = document.getElementById('logout');
const backButton = document.getElementById('back');

checkAuth();
console.log('option');

logoutButton.addEventListener('click', ()=> {
    logout();
});

backButton.addEventListener('click', ()=> {
    location.replace('../');
});


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
    const workshopId = formData.get('workshop_id');
    console.log(name, contact, workshopId, 'test');
    await createParticipant({ name, workshopId, contact });
    location.replace('../');

});

