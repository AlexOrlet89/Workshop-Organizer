import { checkAuth, logout, getWorkshops, deleteParticipant } from '../fetch-utils.js';
import { renderWorkshop, renderParticipants } from '../render-utils.js';

checkAuth();
const logoutButton = document.getElementById('logout');
const addButton = document.getElementById('addParticipant');
const catalog = document.getElementById('catalog');

logoutButton.addEventListener('click', () => {
    logout();
});

addButton.addEventListener('click', ()=> {
    console.log('click');
    location.replace('../addParticipants');
});

window.addEventListener('load', async () => {
    console.log('window load');
    displayWorkshops();
});

async function displayWorkshops() {
    const workshops = await getWorkshops();
    catalog.textContent = '';
    for (let workshop of workshops) {
        const div = await renderWorkshop(workshop);
        for (let participant of workshop.workshopParticipants) {
            const nameDiv = await renderParticipants(participant);
            nameDiv.addEventListener('click', async ()=> {
                console.log(participant.id);
                await deleteParticipant(participant.id);
                await displayWorkshops();
            });
            div.append(nameDiv);
        }
        catalog.append(div);
    }
    
}