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