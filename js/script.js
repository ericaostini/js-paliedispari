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


const btnSuccess = document.querySelector(".btn-success");
const btnDanger = document.querySelector(".btn-danger");
const sceltaEl = document.getElementById("scelta");
const numeroInserito = document.getElementById("number");
const pariDispari = document.getElementById("scelta");
const alertSuccess = document.querySelector(".alert-success");
const alertDanger = document.querySelector(".alert-danger");

btnDanger.addEventListener("click", function(){
    alertSuccess.classList.add("d-none");
    alertDanger.classList.add("d-none");
    let pariDispari = sceltaEl.value.toLowerCase();
    if(pariDispari === "pari"){
        alertSuccess.classList.remove("d-none");
        alertSuccess.innerHTML = "User sceglie pari e computer dispari";
    } else if(pariDispari === "dispari"){
        alertSuccess.classList.remove("d-none");
        alertSuccess.innerHTML = "User sceglie dispari e computer pari";
    } else{
        alertDanger.classList.remove("d-none");
        alertDanger.innerHTML = "Scegli tra pari o dispari";
    }
    btnSuccess.addEventListener("click", function(){
        let numeroUser = parseInt(numeroInserito.value);
        console.log(numeroUser);
        let ComputerNum = getRandomInt(1,5);
        if (numeroUser % 2 === 0 && numeroUser <= 5){
            alertSuccess.classList.remove("d-none");
            alertSuccess.innerHTML = `
                <div> User ha scelto: ${numeroUser} - Pari </div>
                <div> Computer ha scelto: ${ComputerNum} dispari </div>`;
        }else if (numeroUser % 2 !== 0 && numeroUser <= 5){
            alertSuccess.classList.remove("d-none");
            alertSuccess.innerHTML = `<div> User ha scelto: ${numeroUser} dispari</div>`;
        } else{
            alertSuccess.classList.remove("d-none");
            alertSuccess.innerHTML = "Devi inserire un numero tra 1 e 5";
        }
    });
})

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
function sumEvenOrOdd(UserNum, ComputerNum){
    let sommaNumeri = UserNum + ComputerNum;
    if (sommaNumeri % 2 === 0){
        alertSuccess.innerHTML += `<div> La somma dei numeri è ${sommaNumeri}, quindi pari</div>`;
    } else{
        alertSuccess.innerHTML += `<div> La somma dei numeri è ${sommaNumeri}, quindi dispari</div>`;
    }
}

// function winGame(){
//     if ()
// }


