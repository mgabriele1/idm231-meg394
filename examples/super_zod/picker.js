//gloabl bois
let zodDateObj = document.getElementById('zodDate');
let showMeObj = document.getElementById('showMe');

// function
function computeZod() {
    let userBday = zodDateObj.value;
    console.log ('userBday is ' + userBday);
    //0000-00-00
    //0123456789
    let monStr = userBday.substr(5,2);
    let dayStr = userBday.substr(8,2);
    //convert string to number
    let monNum = parseInt(monStr);
    let dayNum = parseInt(dayStr);
    showMeObj.innerHTML = dateToZodiac(monNum, dayNum);
}

//mama function
function dateToZodiac(whichMonth, whichDayOfMonth) {
    if ((whichMonth == 12 && whichDayOfMonth >= 22) || (whichMonth == 1 && whichDayOfMonth <= 19)) {
  AstroSign = "Capricorn (Dec 22-Jan 19)";
    }  else if ((whichMonth == 11 && whichDayOfMonth >= 22) || (whichMonth == 12 && whichDayOfMonth <= 21)) {
  AstroSign = "Sagittarus (Nov 22-Dec 21)";
    } else if ((whichMonth == 10 && whichDayOfMonth >= 24) || (whichMonth == 11 && whichDayOfMonth <= 21)) {
  AstroSign = "Scorpio (Oct 23-Nov 21)";
    } else if ((whichMonth == 9 && whichDayOfMonth >= 23) || (whichMonth == 10 && whichDayOfMonth <= 23)) {
  AstroSign = "Libra (Sep 23-Oct 22)";
    } else if ((whichMonth == 8 && whichDayOfMonth >= 23) || (whichMonth == 9 && whichDayOfMonth <= 22)) {
  AstroSign = "Virgo (Aug 23-Sep 22)";
    } else if ((whichMonth == 7 && whichDayOfMonth >= 23) || (whichMonth == 8 && whichDayOfMonth <= 22)) {
  AstroSign = "Leo (Jul 23-Aug 22)";
    } else if ((whichMonth == 6 && whichDayOfMonth >= 22) || (whichMonth == 7 && whichDayOfMonth <= 22)) {
  AstroSign = "Cancer (Jun 21-Jul 22)";
    } else if ((whichMonth == 5 && whichDayOfMonth >= 21) || (whichMonth == 6 && whichDayOfMonth <= 21)) {
  AstroSign = "Gemini (May 21-June 20)";
    } else if ((whichMonth == 4 && whichDayOfMonth >= 20) || (whichMonth == 5 && whichDayOfMonth <= 20)) {
  AstroSign = "Taurus (Apr 20-May 20)";
    } else if ((whichMonth == 3 && whichDayOfMonth >= 21) || (whichMonth == 4 && whichDayOfMonth <= 19)) {
  AstroSign = "Aries (Mar 21-Apr 19)";
    } else if ((whichMonth == 2 && whichDayOfMonth >= 19) || (whichMonth == 3 && whichDayOfMonth <= 20)) {
  AstroSign = "Pisces (Feb 19-Mar 20)";
    } else if ((whichMonth == 1 && whichDayOfMonth >= 20) || (whichMonth == 2 && whichDayOfMonth <= 18)) {
  AstroSign = "Aquarius (Jan 20-Feb 18)";
    } else if (isNaN(whichMonth)) {
  AstroSign = "INVALID DATE";    
    } else if (isNaN(whichDayOfMonth)) {
  AstroSign = "INVALID DATE";    
    }
    return AstroSign;
}