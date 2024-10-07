/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */
const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];
let initials = findFirstLetter(names);

// Dichiara la funzione qui.
function findFirstLetter(names) {
    let initials = [];
    for (let i = 0; i < names.length; i++) {
        initials.push(names[i][0]);
    }
    return initials;
}
// Invoca la funzione qui e stampa il risultato in console
console.log(initials);


//Risultato atteso: ["A", "L", "M", "A", "G", "A"]

//bonus
/* const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];
let iniziali = TrovaIniziali(names);

let TrovaIniziali = names => names.map(name => name[0]);


console.log(iniziali);  */
