//participants needs the newest workshop id, maybe workshop_id++?

import { createParticipant, createWorkshop, getWorkshops, checkAuth, logout } from '../fetch-utils.js';

const logoutButton = document.getElementById('logout');
const backButton = document.getElementById('back');

checkAuth();

logoutButton.addEventListener('click', ()=> {
    logout();
});

backButton.addEventListener('click', ()=> {
    location.replace('../');
});


const addForm = document.getElementById('addForm');
const createForm = document.getElementById('createForm');
const participants = [];
const rosterDiv = document.getElementById('roster');
// Add participants needs to create an array with name, contact and workshop_id

createForm.addEventListener('submit', async (e)=> {
    e.preventDefault();
    const formData = new FormData(createForm);
    const name = formData.get('name');
    await createWorkshop(name);

    let workshops = await getWorkshops();
    for (let participant of participants) {
        participant.workshopId = workshops.slice(-1)[0].id;
        await createParticipant(participant);
    }
    location.replace('../');


});



addForm.addEventListener('submit', async (e)=> {
    e.preventDefault();
    const formData = new FormData(addForm);
    const name = formData.get('name');
    const contact = formData.get('contact');
    const participant = { name, contact, };
    rosterDiv.textContent = '';
    participants.push(participant);
    for (let participant of participants) {
        const div = document.createElement('div');
        div.textContent = `${participant.name}`;
        rosterDiv.append(div);
    }
});


// console.log(workshops);


// newWorkshopId = workshops.id++? maybe? putting on clothes and going to lunch