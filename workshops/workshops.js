import { checkAuth, logout } from '../fetch-utils.js';

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
