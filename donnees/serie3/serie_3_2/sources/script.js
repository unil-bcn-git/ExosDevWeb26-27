let wordList = document.querySelector("#word-list");

function getInputValue() {
    var sentence = document.querySelector("#sentence");
    var inputVal = document.getElementById("myInput").value;
    sentence.textContent = `Valeur de vie = ${inputVal}`;
}
/*
- Si *prc_vie* est égal ou plus haut que 50% : afficher "Barre de vie verte" dans la console
- Si *prc_vie* est entre 25% (compris) et 50% (non-compris) : afficher "Barre de vie orange" dans la console
- Si *prc_vie* est strictement plus bas que 25% : afficher "Barre de vie rouge" dans la console
*/<