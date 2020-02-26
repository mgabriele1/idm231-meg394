/* get elements */
let but1Obj = document.getElementById("but1");
let but2Obj = document.getElementById("but2");
let but3Obj = document.getElementById("but3");

let soundPlayerObj = document.getElementById("soundplayer");

/* event listeners*/
but1Obj.addEventListener('click', function () {
    playsomething('w08-sounds/bullet.mp3');
}, false);

but2Obj.addEventListener('click', function () {
    playsomething('w08-sounds/water.mp3');
}, false);

but3Obj.addEventListener('click', function () {
    playsomething('w08-sounds/roger.mp3');
}, false);

function playsomething(whichOne) {
    console.log(whichOne);
    soundPlayerObj.src= whichOne;
    soundPlayerObj.play();
}