//participants needs the newest workshop id, maybe workshop_id++?

import { getWorkshops } from '../fetch-utils.js';

const workshops = await getWorkshops();
console.log(workshops);
// newWorkshopId = workshops.id++? maybe? putting on clothes and going to lunch