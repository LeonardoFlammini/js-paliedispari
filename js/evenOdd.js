const numUser = parseInt(prompt("Scegli un numero da 1 a 5"));
const evenOddUser = prompt("Pari o Dispari?").toLocaleLowerCase();
const numPc = randomizer(1,5);
const sum = numUser + numPc;
const out = document.getElementById("evenodd-out");

const message = ( isOdd(sum) && evenOddUser === "dispari"|| !isOdd(sum) && evenOddUser === "pari") ? "Ha vinto l'utente" : "Ha vinto il pc";

out.innerHTML = message + " <br>utente: " + numUser + "<br> pc " + numPc +"<br>somma " +sum + "<br>scelta " + evenOddUser;

function randomizer (min, max){
  return Math.floor(Math.random() * ( max - min + 1 ) + min );
}

function isOdd (num){
  if(num % 2) return true;
  return false;
}