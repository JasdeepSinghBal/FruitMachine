const imgSlot1 = document.getElementById("slot1");
const imgSlot2 = document.getElementById("slot2");
const imgSlot3 = document.getElementById("slot3");
const txtOutput = document.getElementById("messageBox");
const btnspin = document.getElementById("button1");
const btncollect = document.getElementById("button3");
const btncredit = document.getElementById("button2");
const fruit = ["images/apple","images/org","images/banana", "images/lemon", "images/melon"];
const txtCredit = document.getElementById("score1");
const txtWin = document.getElementById("score2");

let credit= 0;
let win= 0;
let winning1 = 10;
let winning2 = 5;

txtOutput.innerText = "No Credit Available, click Credit to Add Token";  
btncredit.addEventListener("click", addCredit);
btnspin.addEventListener("click", spin);
btncollect.addEventListener("click", collectWin);

btnspin.disabled = true;
btncollect.disabled = true;

function addCredit() {    
 credit++;

 txtCredit.innerText= credit;
 btnspin.disabled = false;
 txtOutput.innerText = credit + " Token Added"; 
}
function spin(_this) {
    txtOutput.innerText = "\u00a0";
    credit--;
    txtOutput.innerText = credit + " credit left"; 
   
    txtCredit.innerText= credit;
    if (credit==0){
        btnspin.disabled=true;
        txtOutput.innerText = "No Credit Available (Please Add Credit)"; 
    }
    showReels();
}
function showReels () {
    let slot1 = Math.floor(Math.random() * 5);
    let slot2 = Math.floor(Math.random() * 5);
    let slot3 = Math.floor(Math.random() * 5);
   (fruit[slot1], fruit[slot2], fruit[slot3]);
    imgSlot1.setAttribute("src", fruit[slot1]+ ".jpeg");
    imgSlot2.setAttribute("src", fruit[slot2] + ".jpeg");
    imgSlot3.setAttribute("src", fruit[slot3] + ".jpeg");
    if (slot1 === slot2 && slot1 === slot3) {
        messageBox.innerText = "you won 10 credits!";
        btncollect.disabled = false;
        win = win + winning1;
        txtWin.innerText = win;
        } else if (slot2 === slot3) {
        messageBox.innerText = "you won 5 credits!";
        btncollect.disabled = false;
        win = win + winning2;
        txtWin.innerText = win;
        }
}
function collectWin() {
    messageBox.innerText = "total winnings " + win + " Tokens"
    win = 0;
    txtWin.innerText = 0;
    btncollect.disabled = true;
}
