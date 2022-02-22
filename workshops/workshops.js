import { checkAuth, logout, getWorkshops } from '../fetch-utils.js';
import { renderWorkshop } from '../render-utils.js';

checkAuth();

const logoutButton = document.getElementById('logout');
const addButton = document.getElementById('addParticipant');

logoutButton.addEventListener('click', () => {
    logout();
});

addButton.addEventListener('click', ()=> {
    console.log('click');
    location.replace('../addParticipants');
});
