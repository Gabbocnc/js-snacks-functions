/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];

let letter = 'A';
let risultato = filtraPerLettera(names, letter);

// Dichiara la funzione qui.
function filtraPerLettera(words, letter) {
    const filteredWords = [];
    for (let i = 0; i < words.length; i++) {
        if (words[i][0] === letter) {
            filteredWords.push(words[i]);
        }
    }
    return filteredWords;
}

// Invoca la funzione qui e stampa il risultato in console

console.log(risultato);


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]