const word = prompt("Inserire una parola");
const palOut = document.getElementById("pal-out");

if(isPal(word)){
  palOut.innerHTML = "La parola " + word + " è palindroma"
}else {
  palOut.innerHTML = "La parola " + word + " NON è palindroma"
}


function isPal(word){
  const wordInToArray = word.split("");
  const reverseWordArray = [];
  const conditionIndex = wordInToArray.length - 1;

  for ( let i = 0; i <= conditionIndex; i++){
    reverseWordArray[i] = wordInToArray[conditionIndex - i];
  }
  console.log(reverseWordArray);

  const wordRev = reverseWordArray.join("");
  console.log(wordRev + " Parola al contrario");

  if ( word === wordRev){
    return true;
  }else{
    return false;
  }
}

