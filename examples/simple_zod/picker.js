// global variables
let zodInfoObj = document.getElementById('zodInfo');
let showMeObj = document.getElementById('showMe');

// arrays
let zods = [
    'Cap', //0
    'Sag', //1
    'Sco', //2
    'Lib', //3
    'Vir', //4
    'Leo', //5
    'Can', //6
    'Gem', //7
    'Tau', //8
    'Ari', //9
    'Pis', //10
    'Aqu'  //11
];

let zodDates= [
    'Dec 22.. Jan 19',
    'Nov 22.. Dec 21',
    'Oct 24.. Nov 21',
    'Sep 23.. Oct 23',
    'Aug 23.. Sep 22',
    'Jul 23.. Aug 22',
    'Jun 22.. Jul 22',
    'May 21.. Jun 21',
    'Apr 20.. May 20',
    'Mar 21.. Apr 19',
    'Feb 19.. Mar 20',
    'Jan 20.. Feb 18'
];

// functions
function computeZod() {
    console.log ('computeZod called');
    let userPicked = zodInfoObj.value;
    console.log('User picked: ' + userPicked);
    //showMeObj.innerHTML = 'User lucky number is: ' +userPicked;
    // showMeObj.innerHTML = zods[userPicked-1];
    showMeObj.innerHTML = zods[userPicked-1] + ' - ' + zodDates[userPicked-1];
}
