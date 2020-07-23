// Variabili array bombe
var bombe = [];
var maxelementi = 16;
var max = 100;

// BONUS selezione difficoltà
var difficolta = parseInt(prompt("Scegli il livello di difficoltà"))
switch (difficolta) {
    case 0:
    var max = 100;
    break;
    case 1:
    var max = 80;
    break;
    case 2:
    var max = 50;
    break;
    default:
    max = 100;

}

// Inserimento numeri bombe

while (bombe.length < maxelementi) {
    var numero = numeroRandom(1,max);
    if (trovaElemento(bombe, numero) == false) {
        bombe.push(numero);
    }
}


console.log(bombe);


// Selezione numeri numeri utente
var tentativi = max - bombe.length;
var arrayUtente = [];
var numeroUtente;
var trovato = false;
while (arrayUtente.length < 5 && trovato == false) {
    numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 100"));
    if (trovaElemento(arrayUtente, numeroUtente) == false) {
        arrayUtente.push(numeroUtente);
    } else if (trovaElemento(arrayUtente, numeroUtente) == true){
        alert("Numero già inserito!");
    }
    while (numeroUtente <= 0 || numeroUtente > max){
        alert("Numero non valido!");
    }
// controllare che non sia una bomba
    if (trovaElemento(bombe, numeroUtente)) {
        trovato = true;
        alert("BOMBA!");
        alert("Punteggio: " + arrayUtente.length);
    }
}
console.log(arrayUtente);

// Funzioni

// Funzione che genera un numero random
function numeroRandom(min, max){
    return Math.floor(Math.random()*(max - min + 1) + 1);
}

// Funzione che verifica se elemento sia o meno già
// contenuto in un array
function trovaElemento(a, elemento) {
    var i = 0;
    while (i < a.length) {
        if (elemento == a[i]) {
            return true;
        }
        i++;
}
return false
}
