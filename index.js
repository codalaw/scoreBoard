
let countHome = 0;
let countGuest = 0;

let scoreHome = document.getElementById("scoreHome");
let scoreGuest = document.getElementById("scoreGuest");

function homeAdd1() {
    countHome++;
    scoreHome.innerText = countHome;
} 

function homeAdd2() {
    countHome+=2
    scoreHome.innerText = countHome;
}

function homeAdd3() {
    countHome+=3
    scoreHome.innerText = countHome;
}

function homeMinus1() {
    countHome--
    scoreHome.innerText = countHome;
}

function homeMinus2() {
    countHome-=2
    scoreHome.innerText = countHome;
}

function homeMinus3() {
    countHome-=3
    scoreHome.innerText = countHome;
}
// -------- Home Above - Guest Below -------

function guestAdd1() {
    countGuest++;
    scoreGuest.innerText = countGuest;
}

function guestAdd2() {
    countGuest+=2
    scoreGuest.innerText = countGuest;
}

function guestAdd3() {
    countGuest+=3
    scoreGuest.innerText = countGuest;
}

function guestMinus1() {
    countGuest--
    scoreGuest.innerText = countGuest;
}

function guestMinus2() {
    countGuest-=2
    scoreGuest.innerText = countGuest;
}

function guestMinus3() {
    countGuest-=3
    scoreGuest.innerText = countGuest;
}