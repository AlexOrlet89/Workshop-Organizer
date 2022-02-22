export async function renderWorkshop(workshop) {
    const div = document.createElement('div');
    div.classList.add('workshop');
    const title = document.createElement('h3');
    title.textContent = `${workshop.name}`;
    div.append(title);
    return div;

}