/*HOVER IMAGE REPLACE*/
function mainMain () {
    let main = document.getElementById("main");
    main.src="../graphics/maindefault.png"
}
/* alternative music */
let altButton = document.getElementById ("alternative");

altButton.addEventListener("mouseover", mainAlt)
    function mainAlt () {
        let main = document.getElementById("main");
        main.src="../graphics/mainalt.png";
    }
altButton.addEventListener("mouseout", mainMain);