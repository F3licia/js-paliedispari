//chiedo una parola all'utente
var parola = prompt("inserisci una parola");

//impedisco l'inserimento di cifre
while (!isNaN(parola)) {
    alert("Non valido")
    var parola = prompt ("Inserisci una parola")
    isNaN(parola)
  }

var pal
//inverto la parola inserita
var parolaInvertita = parola.split("").reverse().join("");

//alternativa vista in classe
/*
    for (var i = parola.length -1; i >= 0; i--){
    parolaInvertita += parola[i]
    }
*/


if (parola === parolaInvertita) {
    pal = true
    document.write("La parola è palindroma");
}else{
    pal = false
    document.write("La parola non è palindroma");
}


console.log(parola)

console.log(parolaInvertita)

console.log(pal)




