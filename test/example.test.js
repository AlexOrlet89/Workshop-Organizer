// IMPORT MODULES under test here:
// import { example } from '../example.js';
// import { renderWorkshop } from '../workshops/workshops.js';

import { renderWorkshop } from '../render-utils.js';


const test = QUnit.test;

test('time to test a function', async (expect) => {
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
