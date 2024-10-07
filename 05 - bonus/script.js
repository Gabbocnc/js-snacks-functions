/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';
let saluto;

// Dichiara la funzione qui.
function salutaMario(name){
    let ora = new Date().getHours();

    if ( ora < 13){
        saluto = 'Buongiorno';
    }else if (ora < 17){
        saluto = 'Buon pomeriggio';
    }else{
        saluto = 'Buonasera';
    }
    return `${saluto} ${name}.`;
}

// Invoca la funzione qui e stampa il risultato in console
console.log(salutaMario(name));


//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.