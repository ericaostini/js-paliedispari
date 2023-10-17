const btn = document.querySelector("button");
const word = document.getElementById("word");
const alertEl = document.querySelector(".alert");

btn.addEventListener("click", function(){
    let originalWord = word.value.toLowerCase();
    console.log(originalWord);
})