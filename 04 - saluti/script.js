/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const name = 'Mario';
let salutare = salutaMario(name)
// Dichiara la funzione qui.
function salutaMario(nome){
    return `Ciao ${name}`
}

// Invoca la funzione qui e stampa il risultato in console

console.log(salutare);


//Risultato atteso se si passa 'Mario': // ciao Mario