/* Global Variables */
// img
let heroObj = document.getElementById('hero');
// buttons
let capObj = document.getElementById('cap');
let ariObj = document.getElementById('ari');
let scoObj = document.getElementById('sco');

/* Functions */
function swapZodInfo (whichOne) {
    console.log ('swap zod info called ' + whichOne);
    // swap out zodiac image
    // swap out zodiac description with date range
    // play a zodiac sound
    if (whichOne == 1) {
        heroObj.src = 'imgs/image1.jpg';
    } else if (whichOne == 2) {
        heroObj.src= 'imgs/image2.jpg';
    } else if (whichOne == 3) {
        heroObj.src = 'imgs/image3.jpg';
    } else {
        console.log ('Error in swapZodInfo')
    }
}
// structure for anonamous function for event listener
capObj.addEventListener('click', function () {
  swapZodInfo(1);
}, false);

ariObj.addEventListener('click', function () {
  swapZodInfo(2);
}, false);

scoObj.addEventListener('click', function () {
  swapZodInfo(3);
}, false);


 