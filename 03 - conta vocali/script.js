/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';
let vocali = 'aeiou'
let count = 0;
let result = getVocali(word)
// Dichiara la funzione qui.
function getVocali(word){
    for (let i = 0; i < word.length; i++){
        
        if (vocali.includes(word[i])) {
            count++;
        }
    }
    return count
}

// Invoca la funzione qui e stampa il risultato in console

console.log(result);

//Risultato atteso se si passa 'javascript': 3 (a, a, i)