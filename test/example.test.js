// IMPORT MODULES under test here:
// import { example } from '../example.js';
// import { renderWorkshop } from '../workshops/workshops.js';

import { renderParticipants, renderWorkshop } from '../render-utils.js';


const test = QUnit.test;

test('renderWorkshop should return a div with the workshops name', async (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<div class="workshop"><h3>Astral Photography</h3></div>`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = await renderWorkshop({ name: 'Astral Photography' });
    console.log(actual);
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});
test('renderParticipants should return a div with the participants name', async (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<div>Shania Twain</div>`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = await renderParticipants({ name: 'Shania Twain' });
    console.log(actual);
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});
