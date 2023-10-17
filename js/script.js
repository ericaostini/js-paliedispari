const btn = document.querySelector("button");
const word = document.getElementById("word");
const alertEl = document.querySelector(".alert");

btn.addEventListener("click", palindromeOrNo);

/** [palindromeOrNO]
 * funzione inverte parola inserita e le confronta per vedere se sono palindrome
 */
function palindromeOrNo(){
    let originalWord = word.value.toLowerCase();
    let reverseW = reverseWord(originalWord);
    console.log(reverseW);
    let palWord;
    if (palWord = isPalindrome(originalWord,reverseW)){
        alertEl.innerHTML = "Palindroma";
    } else {
        alertEl.innerHTML = "Non è palindroma"
    }

};

/** [reverseWord]
 * funzione che scrive al contrario una parola
 * @param {String} originalWord parola inserita da input
 * @returns {String} parola invertita dopo essere stata aggiunta in un array
 */
function reverseWord(originalWord){
    let splitWord = originalWord.split("");
    let reverseA = splitWord.reverse();
    let joinA = reverseA.join("");
    return joinA;
}

/** [isPalindrome]
 * funzione che determina se due parole sono palindrome (true/false)
 * @param {String} originalW inserita dall'utente nell'input
 * @param {String} reverseW generata con function reverseWord
 * @returns {Boolean}
 */
function isPalindrome(originalW, reverseW){
    let msg;
    if (originalW === reverseW){
        return true;
    } else{
        return false;
    }
}


const btnDanger = document.querySelector(".btn-danger");
const btnSuccess = document.querySelector(".btn-success");
const numeroInserito = document.getElementById("number");
const pariDispari = document.getElementById("scelta");
const alertSuccess = document.querySelector(".alert-success");
const alertDanger = document.querySelector(".alert-danger");
const game = document.getElementById("game");

btnDanger.addEventListener("click", function(){
    let sceltaEl = pariDispari.value.toLowerCase();
    console.log(sceltaEl);
    if (sceltaEl === "pari" || sceltaEl === "dispari"){
        game.classList.remove("d-none");
    } else{
        alertDanger.classList.remove("d-none");
        alertDanger.innerHTML = "Devi inserire pari e dispari";
    }
    btnSuccess.addEventListener("click", function(){
        let numeroUser = parseInt(numeroInserito.value);
        console.log(numeroUser);
        if (numeroUser <= 5){
            alertSuccess.classList.remove("d-none");
            alertSuccess.innerHTML = `<div> User ha scelto: ${numeroUser} </div>`;
        } else {
            alertSuccess.classList.remove("d-none");
            alertSuccess.innerHTML = "Scegli un numero da 1 a 5";
        }
        let computerNumber = getRndInteger(1,5);
        console.log(computerNumber);
        alertSuccess.innerHTML +=  ` 
        <div> Computer ha scelto: ${computerNumber} </div>`;
    })
});

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

function sumEvenOrOdd(){

}


