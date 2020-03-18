/*HOVER IMAGE REPLACE*/
/*get button elements*/
let altButton = document.getElementById ("alternative");
let rockButton = document.getElementById ("rock");
let bluesButton = document.getElementById ("blues");
let jazzButton = document.getElementById ("jazz");
let dancButton = document.getElementById ("dance");
let popButton = document.getElementById ("pop");
let cntryButton = document.getElementById ("country");
let indButton = document.getElementById ("indie");
let wrldButton = document.getElementById ("world");
let rapButton = document.getElementById ("rap");
let tcButton = document.getElementById ("theclassics");
let clsclButton = document.getElementById ("classical");

/*get main element*/
let main = document.getElementById("main");

/* hover event listeners */
altButton.addEventListener("mouseover", function () {
    mainSwitch("../graphics/mainalt.png");
}, false);
rockButton.addEventListener("mouseover", function () {
    mainSwitch("../graphics/mainrock.png");
}, false);
bluesButton.addEventListener("mouseover", function () {
    mainSwitch("../graphics/mainblues.png");
}, false);
jazzButton.addEventListener("mouseover", function () {
    mainSwitch("../graphics/mainjazz.png");
}, false);
dancButton.addEventListener("mouseover", function () {
    mainSwitch("../graphics/maindance.png");
}, false);
popButton.addEventListener("mouseover", function () {
    mainSwitch("../graphics/mainpop.png");
}, false);
cntryButton.addEventListener("mouseover", function () {
    mainSwitch("../graphics/maincountry.png");
}, false);
indButton.addEventListener("mouseover", function () {
    mainSwitch("../graphics/mainindie.png");
}, false);
wrldButton.addEventListener("mouseover", function () {
    mainSwitch("../graphics/mainworld.png");
}, false);
rapButton.addEventListener("mouseover", function () {
    mainSwitch("../graphics/mainrap.png");
}, false);
tcButton.addEventListener("mouseover", function () {
    mainSwitch("../graphics/maintheclassics.png");
}, false);
clsclButton.addEventListener("mouseover", function () {
    mainSwitch("../graphics/mainclassical.png");
}, false);

/* hover switch function*/
function mainSwitch (whichOne) {
    main.src= whichOne;
 }
 
/* mouse out event listeners */
altButton.addEventListener("mouseout", mainMain);
rockButton.addEventListener("mouseout", mainMain);
bluesButton.addEventListener("mouseout", mainMain);
jazzButton.addEventListener("mouseout", mainMain);
dancButton.addEventListener("mouseout", mainMain);
popButton.addEventListener("mouseout", mainMain);
cntryButton.addEventListener("mouseout", mainMain);
indButton.addEventListener("mouseout", mainMain);
wrldButton.addEventListener("mouseout", mainMain);
rapButton.addEventListener("mouseout", mainMain);
tcButton.addEventListener("mouseout", mainMain);
clsclButton.addEventListener("mouseout", mainMain);

/* back to main function */
function mainMain () {
    let main = document.getElementById("main");
    main.src="../graphics/maindefault.png";
}

/* ----------------------------------------------------- */

/* MODAL */
let modal = document.getElementById('modal');
const btnModal = document.querySelectorAll('.toggle-modal');

btnModal.forEach(button => {
  button.addEventListener(
    'click',
    () => {
      modal.hidden = !modal.hidden;
    },
    false
  );
});

/* MODAL CONTENT ADJUSTMENT */
/* get modal elements */
let modTitle = document.getElementById("modtitle");
let modImg = document.getElementById ("modimg");
let modDate = document.getElementById("moddate");
let modText = document.getElementById("modtext");
let modSound = document.getElementById("soundplayer")

/* define fill-in elements */
/* alternative */
let altTitle = "../graphics/titlealt.png";
let altImg = "../graphics/imgalt.png";
let altDate = "January 20 - February 18";
let altText = "As an aquarius, you are an air sign, independent, and free spirited. You are innovative, imaginative, and a little rebellious. Alternative music is a great fit for you because it doesn't follow anyone else's rules. Alternative music is filled with persoanlity and originality, making it one of a kind, like you. The artists of this genre have a rebellious side to their music, embracing and showing off their unique style.";
let altSound = "../sounds/alternative.mp3";
/* rock */
let rockTitle = "../graphics/titlerock.png";
let rockImg = "../graphics/imgrock.png";
let rockDate = "March 21 - April 19";
let rockText = "As an Aries, you are a fire sign, filled with adrenaline, constantly on the move. You are passionate and true to yourself. You are energetic, dynamic, charismatic, honest, and a little bit crazy. Rock music is a great fit for you because it is upbeat music that will keep up with your pace. Rock music has a good beat behind it and meaningful lyrics.";
let rockSound = "../sounds/rock.mp3";
/* blues */
let bluesTitle = "../graphics/titleblues.png";
let bluesImg = "../graphics/imgblues.png";
let bluesDate = "June 21 - July 22";
let bluesText = "As a Cancer, you are a water sign, ruled by feelings. You are loyal, emotional, immaginative, sentimental and compassionate. You think deeply and love to support/ care for others. Blues/ R&B is the best fit for you beause it can be dark, but it can also be loving and lively. Blues music is about getting swept up in the magic of the song. The beats and lyrics of this genre trigger emotions, touching the heart and soul of the listener.";
let bluesSound = "../sounds/blues.mp3";
/* jazz */
let jazzTitle = "../graphics/titlejazz.png";
let jazzImg = "../graphics/imgjazz.png";
let jazzDate = "December 22 - January 19";
let jazzText = "As a Capricorn, you are an earth sign, sophisticated and hard working. You are intelligent, making your own rules in life and working hard toward your goals. Jazz is the best fit for you because it is sophisticated music that takes work and dedication to craft. Just like you, this genre does not abide by any other rules. Jazz is more than just a music genre, it is like a representation of you.";
let jazzSound = "../sounds/jazz.mp3";
/* dance */
let dancTitle = "../graphics/titledance.png";
let dancImg = "../graphics/imgdance.png";
let dancDate = "May 21 - June 20";
let dancText = "As a Gemini, you are an air sign, gentle and affectonate. You are high energy and versitle, always moving, always on the go. You are free-spirited and highly expressive. You consider music an important learning experience and you love teaching people new things about music. Dance music is the best fit for you because it keeps you dancing/ on your feet. With all that energy pent up, you need a genre that you can really dance to.";
let dancSound = "../sounds/edm.mp3";
/* pop */
let popTitle = "../graphics/titlepop.png";
let popImg = "../graphics/imgpop.png";
let popDate = "Juy 23 - August 22";
let popText = "As a Leo, you are a fire sign, the kings and ueens of the zodiac. You are a leader, someone popular, outgoing, and friendly. Popular music resonates with you, as it is also the center of attention. You love songs you can sing and dance to, and you've alwyas got the newest singles playing. You are invested in the whole musical experience, following the musicians rather than just the music.";
let popSound = "../sounds/pop.mp3";
/* country */
let cntryTitle = "../graphics/titlecountry.png";
let cntryImg = "../graphics/imgcountry.png";
let cntryDate = "September 23 - October 22";
let cntryText = "As a Libra, you are an air sign ruled by venus, making you the ultimate social sign. You are also loving and gracious. As a social creature, you relate best to mysic that gives you the opportunity to incorporate your favorite songs into whatever you do. Country music is the best fit for you because it is a catchy beat with meaningful lyrics. Country lyrics are about love and relating to others, two things that resonate with you.";
let cntrySound = "../sounds/country.mp3";
/* indie */
let indTitle = "../graphics/titleindie.png";
let indImg = "../graphics/imgindie.png";
let indDate = "February 19 - March 20";
let indText = "As a Pisces, you are a water sign, having the deepest connection to music. You have many emotions and think deeply, leading you to be artistic, romantic, intuitive, and original. For you, music is an escape from reality, getting you in touch with your emotions. Indie music is a great fit for you because it is complex in beats and lyrics, feeding your need to get in touch with your emotions.";
let indSound = "../sounds/indie.mp3";
/* world */
let wrldTitle = "../graphics/titleworld.png";
let wrldImg = "../graphics/imgworld.png";
let wrldDate = "November 22 - December 21";
let wrldText = "As a Saggitatrius, you are a fire sign, openminded and idealistic. You have a great sense of humor and a love for culture, spirituality, and religion. World music is the best fit for you because it embodies different cultures and allows you to embrace and celebrate other cultures. You hate limiting yourself to one kind of music. You also like this genre for the emotion and catchiness of the songs, enjoying music that makes you want to get on your feet and dance.";
let wrldSound = "../sounds/world.mp3";
/* rap */
let rapTitle = "../graphics/titlerap.png";
let rapImg = "../graphics/imgrap.png";
let rapDate = "October 23 - November 21";
let rapText = "As a Scorpio, you are a water sign, passionate and emotional. You are resourceful, brave, intense, and passionate. Rap/ hip-hop is the best fit for you because it is intense music that sigs into the soul. There's a lot of passion in the lyrics as well as a strong beat. These songs read more like poems, and you like that this is a different outlet for emotions than simply talking about them.";
let rapSound = "../sounds/rap.mp3";
/* the classics */
let tcTitle = "../graphics/titletc.png";
let tcImg = "../graphics/imgtc.png";
let tcDate = "April 20 - May 20";
let tcText = "As a Tarus, you are an earth sign ruled by venus, the planet of beauty, music, and art. You are relaxed and find comfort in listening to songs that remind you of good times. You are most at home when listening to the classics, reminiscing on the history of music. The classics remind you of a better time, a time when musicians were really about the music.";
let tcSound = "../sounds/theclassics.mp3";
/* classical */
let classTitle = "../graphics/titleclass.png";
let classImg = "../graphics/imgclass.png";
let classDate = "August 23 - September 22";
let classText = "As a Virgo, you are an earth sign, peaceful and calm. You are warm, caring, intelligent, analytical, and kind. You appreciate the sounds of nature and soothing tunes that can help calm your nerves. Classical music is the best fit for you because it is the cleanest most intellectual type of music. As one of the most intelligent signs, this music allows you to search within, tapping into your intellectual side.";
let classSound = "../sounds/classical.mp3";

/* event listeners */
altButton.addEventListener("click", function () {
    altModal(altTitle, altImg, altDate, altText, altSound);
}, false);
rockButton.addEventListener("click", function () {
    altModal(rockTitle, rockImg, rockDate, rockText, rockSound);
}, false);
bluesButton.addEventListener("click", function () {
    altModal(bluesTitle, bluesImg, bluesDate, bluesText, bluesSound);
}, false);
jazzButton.addEventListener("click", function () {
    altModal(jazzTitle, jazzImg, jazzDate, jazzText, jazzSound);
}, false);
dancButton.addEventListener("click", function () {
    altModal(dancTitle, dancImg, dancDate, dancText, dancSound);
}, false);
popButton.addEventListener("click", function () {
    altModal(popTitle, popImg, popDate, popText, popSound);
}, false);
cntryButton.addEventListener("click", function () {
    altModal(cntryTitle, cntryImg, cntryDate, cntryText, cntrySound);
}, false);
indButton.addEventListener("click", function () {
    altModal(indTitle, indImg, indDate, indText, indSound);
}, false);
wrldButton.addEventListener("click", function () {
    altModal(wrldTitle, wrldImg, wrldDate, wrldText, wrldSound);
}, false);
rapButton.addEventListener("click", function () {
    altModal(rapTitle, rapImg, rapDate, rapText, rapSound);
}, false);
tcButton.addEventListener("click", function () {
    altModal(tcTitle, tcImg, tcDate, tcText, tcSound);
}, false);
clsclButton.addEventListener("click", function () {
    altModal(classTitle, classImg, classDate, classText, classSound);
}, false);

/* modal switch function */
function altModal (whichTitle, whichImg, whichDate, whichText, whichSound) {
    modal.hidden = !modal.hidden;
    modTitle.src= whichTitle;
    modImg.src= whichImg;
    modDate.innerHTML= whichDate;
    modText.innerHTML= whichText;
    modSound.src= whichSound;
    modSound.play();
}

/* ----------------------------------------------------- */

/* DATE PICKER */
/* zod variables */
let zodDateObj = document.getElementById('zodDate');

/* date picker function */
function computeZod() {
    let userBday = zodDateObj.value;
    //0000-00-00
    //0123456789
    let monStr = userBday.substr(5,2);
    let dayStr = userBday.substr(8,2);
    //convert string to number
    let monNum = parseInt(monStr);
    let dayNum = parseInt(dayStr);
    dateToZodiac(monNum, dayNum);
}

/* date sort function */
function dateToZodiac(whichMonth, whichDayOfMonth) {
    if ((whichMonth == 12 && whichDayOfMonth >= 22) || (whichMonth == 1 && whichDayOfMonth <= 19)) {
  altModal(jazzTitle, jazzImg, jazzDate, jazzText, jazzSound);
    }  else if ((whichMonth == 11 && whichDayOfMonth >= 22) || (whichMonth == 12 && whichDayOfMonth <= 21)) {
  altModal(wrldTitle, wrldImg, wrldDate, wrldText, wrldSound);
    } else if ((whichMonth == 10 && whichDayOfMonth >= 24) || (whichMonth == 11 && whichDayOfMonth <= 21)) {
  altModal(rapTitle, rapImg, rapDate, rapText, rapSound);
    } else if ((whichMonth == 9 && whichDayOfMonth >= 23) || (whichMonth == 10 && whichDayOfMonth <= 23)) {
  altModal(cntryTitle, cntryImg, cntryDate, cntryText, cntrySound);
    } else if ((whichMonth == 8 && whichDayOfMonth >= 23) || (whichMonth == 9 && whichDayOfMonth <= 22)) {
  altModal(classTitle, classImg, classDate, classText, classSound);
    } else if ((whichMonth == 7 && whichDayOfMonth >= 23) || (whichMonth == 8 && whichDayOfMonth <= 22)) {
  altModal(popTitle, popImg, popDate, popText, popSound);
    } else if ((whichMonth == 6 && whichDayOfMonth >= 22) || (whichMonth == 7 && whichDayOfMonth <= 22)) {
  altModal(bluesTitle, bluesImg, bluesDate, bluesText, bluesSound);
    } else if ((whichMonth == 5 && whichDayOfMonth >= 21) || (whichMonth == 6 && whichDayOfMonth <= 21)) {
  altModal(dancTitle, dancImg, dancDate, dancText, dancSound);
    } else if ((whichMonth == 4 && whichDayOfMonth >= 20) || (whichMonth == 5 && whichDayOfMonth <= 20)) {
  altModal(tcTitle, tcImg, tcDate, tcText, tcSound);
    } else if ((whichMonth == 3 && whichDayOfMonth >= 21) || (whichMonth == 4 && whichDayOfMonth <= 19)) {
  altModal(rockTitle, rockImg, rockDate, rockText, rockSound);
    } else if ((whichMonth == 2 && whichDayOfMonth >= 19) || (whichMonth == 3 && whichDayOfMonth <= 20)) {
  altModal(indTitle, indImg, indDate, indText, indSound);
    } else if ((whichMonth == 1 && whichDayOfMonth >= 20) || (whichMonth == 2 && whichDayOfMonth <= 18)) {
  altModal(altTitle, altImg, altDate, altText, altSound);
    } else if (isNaN(whichMonth)) {
  invalidFctn ();     
    } else if (isNaN(whichDayOfMonth)) {
  invalidFctn (); 
    }
}

/* ----------------------------------------------------- */

/* HELP BUTTON */
let helpModal = document.getElementById('helpmodal');
const btnHelp = document.querySelectorAll('.toggle-help');
btnHelp.forEach(button => {
  button.addEventListener(
    'click',
    () => {
        helpModal.hidden = !helpModal.hidden;
        if (helpBtn.className !== "helpclicked") {
            helpBtn.classList.add("helpclicked");
        } else {
            helpBtn.classList.remove("helpclicked")
        }
    },
    false
  );
});

let helpBtn = document.getElementById('help');

helpBtn.addEventListener("click", menuHelp, false);

function menuHelp () {
    helpModal.hidden = !helpModal.hidden;
    if (helpBtn.className !== "helpclicked") {
        helpBtn.classList.add("helpclicked");
    } else {
        helpBtn.classList.remove("helpclicked")
    } 
}

/* INVALID DATE FUNCTION */
function invalidFctn () {
    
}; 