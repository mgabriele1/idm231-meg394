/* CODE NEEDS ; */
/*HOVER IMAGE REPLACE*/
function mainMain () {
    let main = document.getElementById("main");
    main.src="graphics/maindefault.png"
}
/* alternative music */
let altButton = document.getElementById ("alternative");

altButton.addEventListener("mouseover", mainAlt)
    function mainAlt () {
        let main = document.getElementById("main");
        main.src="graphics/mainalt.png"
    }
altButton.addEventListener("mouseout", mainMain)

/* rock music*/
let rockButton = document.getElementById ("rock");

rockButton.addEventListener("mouseover", mainRock)
    function mainRock () {
        let main = document.getElementById("main");
        main.src="graphics/mainrock.png"
    }
rockButton.addEventListener("mouseout", mainMain)


/* blues music*/
let bluesButton = document.getElementById ("blues");

bluesButton.addEventListener("mouseover", mainBlues)
    function mainBlues () {
        let main = document.getElementById("main");
        main.src="graphics/mainblues.png"
    }
bluesButton.addEventListener("mouseout", mainMain)


/* jazz music*/
let jazzButton = document.getElementById ("jazz");

jazzButton.addEventListener("mouseover", mainJazz)
    function mainJazz () {
        let main = document.getElementById("main");
        main.src="graphics/mainjazz.png"
    }
jazzButton.addEventListener("mouseout", mainMain)

/* dance music*/
let dancButton = document.getElementById ("dance");

dancButton.addEventListener("mouseover", mainDanc)
    function mainDanc () {
        let main = document.getElementById("main");
        main.src="graphics/maindance.png"
    }
dancButton.addEventListener("mouseout", mainMain)

/* pop music*/
let popButton = document.getElementById ("pop");

popButton.addEventListener("mouseover", mainPop)
    function mainPop () {
        let main = document.getElementById("main");
        main.src="graphics/mainpop.png"
    }
popButton.addEventListener("mouseout", mainMain)

/* country music*/
let cntryButton = document.getElementById ("country");

cntryButton.addEventListener("mouseover", mainCntry)
    function mainCntry () {
        let main = document.getElementById("main");
        main.src="graphics/maincountry.png"
    }
cntryButton.addEventListener("mouseout", mainMain)

/* indie music*/
let indButton = document.getElementById ("indie");

indButton.addEventListener("mouseover", mainInd)
    function mainInd () {
        let main = document.getElementById("main");
        main.src="graphics/mainindie.png"
    }
indButton.addEventListener("mouseout", mainMain)

/* world music*/
let wrldButton = document.getElementById ("world");

wrldButton.addEventListener("mouseover", mainWrld)
    function mainWrld () {
        let main = document.getElementById("main");
        main.src="graphics/mainworld.png"
    }
wrldButton.addEventListener("mouseout", mainMain)

/* rap music*/
let rapButton = document.getElementById ("rap");

rapButton.addEventListener("mouseover", mainRap)
    function mainRap () {
        let main = document.getElementById("main");
        main.src="graphics/mainrap.png"
    }
rapButton.addEventListener("mouseout", mainMain)

/* the classics music*/
let tcButton = document.getElementById ("theclassics");

tcButton.addEventListener("mouseover", mainTc)
    function mainTc () {
        let main = document.getElementById("main");
        main.src="graphics/maintheclassics.png"
    }
tcButton.addEventListener("mouseout", mainMain)

/* classical music*/
let clsclButton = document.getElementById ("classical");

clsclButton.addEventListener("mouseover", mainClscl)
    function mainClscl () {
        let main = document.getElementById("main");
        main.src="graphics/mainclassical.png"
    }
clsclButton.addEventListener("mouseout", mainMain)

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

/*MODAL CONTENT ADJUSTMENT*/
let modTitle = document.getElementById("modtitle");
let modImg = document.getElementById ("modimg");
let modText = document.getElementById("modtext");

/* alternative music */
altButton.addEventListener("click", altModal)
function altModal () {
    modal.hidden = !modal.hidden;
    modTitle.src="graphics/titlealt.png";
    modImg.src="graphics/imgalt.png";
    modText.innerHTML="As an aquarius, you are an air sign, independent, and free spirited. You are innovative, imaginative, and a little rebellious. Alternative music is a great fit for you because it doesn't follow anyone else's rules. Alternative music is filled with persoanlity and originality, making it one of a kind, like you. The artists of this genre have a rebellious side to their music, embracing and showing off their unique style.";
}