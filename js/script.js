// Riempimento array bombe

var bombe = [];
var maxelementi = 16;
var max = 100;

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
    } else {
        alert("Numero già inserito!");
    }
    while (numeroUtente <= 0 || numeroUtente > max){
        alert("Numero non valido!");
    }
    if (trovaElemento(bombe, numeroUtente)) {
        trovato = true;
        alert("BOMBA!");
        alert("Punteggio: " + arrayUtente.length);
    }else if (!trovaElemento(arrayUtente, numeroUtente)) {
        arrayUtente.push(numeroUtente);
    }else {
        alert("Numero già inserito!");
    }
}
console.log(arrayUtente);

// controllare che non sia una bomba



// Funzioni
function numeroRandom(min, max){
    return Math.floor(Math.random()*(max - min + 1) + 1);
}
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
