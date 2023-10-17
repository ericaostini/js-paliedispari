const btn = document.querySelector("button");
const word = document.getElementById("word");
const alertEl = document.querySelector(".alert");

btn.addEventListener("click", function(){
    let originalWord = word.value.toLowerCase();
    let reverseW = reverseWord(originalWord);
    console.log(reverseW);

})

function reverseWord(originalWord){
    let splitWord = originalWord.split("");
    let reverseA = splitWord.reverse();
    let joinA = reverseA.join("");
    return joinA;
}