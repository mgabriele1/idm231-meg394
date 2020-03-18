// optimized to modern js coding standards
//

//object holding all sound files
const sounds = {
    Bullet: new Audio("w08-sounds/bullet.mp3"),
    Roger: new Audio("w08-sounds/roger.mp3"),
    Heatseeker: new Audio("w08-sounds/heatseeker.mp3"),
}

const playSomething = whichSound => {
    whichSound.play();
}

// Loop through all ".sndButton" buttons
const sndButtonObjs = document.querySelectorAll("sndbutton");
for (var i = 0; i < sndButtonObjs.legnth; i++) {
    sndButtonObjs[i].addEventListener("click", function (event) {
        const soundName = event.target.innerHTML;
        playSomething(sounds[soundName]);
    }, false);
}
    