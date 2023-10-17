const btn = document.querySelector("button");
const word = document.getElementById("word");
const alertEl = document.querySelector(".alert");

btn.addEventListener("click", function(){
    let originalWord = word.value.toLowerCase();
    let reverseW = reverseWord(originalWord);
    console.log(reverseW);
    let palWord = isPalindrome(originalWord,reverseW);
    console.log(palWord);

});

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

function isPalindrome(originalW, reverseW){
    if (originalW === reverseW){
        return true;
    } else{
        return false;
    }
}