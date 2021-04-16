//chiedo una parola all'utente
var parola = prompt("inserisci una parola");

//impedisco l'inserimento di cifre
while (!isNaN(parola)) {
    alert("Non valido")
    var parola = prompt ("Inserisci una parola")
    isNaN(parola)
  }

//funzione per invertire gli input utente
function reverse(input){
inputInvertito = input.split("").reverse().join("");
return inputInvertito
}
var parolaInvertita;
var parolaInvertita = reverse(parola);

/*

//alternativa vista in classe

    for (var i = parola.length -1; i >= 0; i--){
    parolaInvertita += parola[i]
    }
*/


function compare(input, tupni){
    if (input === tupni) {
        document.write("La parola è palindroma");
        return true
    }else{
        document.write("La parola non è palindroma");
        return false
        
    }
}

var palindromo
var palindromo = compare(parola, parolaInvertita);

console.log(parola)

console.log(parolaInvertita)

console.log(palindromo)




