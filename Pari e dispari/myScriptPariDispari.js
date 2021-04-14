//chiedo all'utente di scegliere tra pari o dispari
var userChoice = prompt("Scegli tra pari o dispari")

//rendo la scelta in lowercase
userChoice = userChoice.toLowerCase() 

console.log(userChoice)

var risposta
var winner
//chiedo all'utente un numero da 1 a 5
var userNum = parseInt(prompt("Scegli un numero da 1 a 5"))

console.log(userNum)

//chiedo al computer un numero da 1 a 5
var computerNum = parseInt( Math.floor(Math.random() * 5) + 1);

//creo una funzione per addizzionare i valori
function addizione(userNum, computerNum) {
    var risultato = userNum + computerNum;
    return risultato;
}
var somma = addizione(userNum, computerNum)

//è pari
function pari(somma) {
	if (somma %2 == 0)
		return true;
	else
		return false;
}
var risposta = pari(somma)

if(pari = true){
    console.log("è pari")
} else if (pari = false){
    console.log("è dispari")
}



//confronto il risultato con l'input dell'utente e ne stabilisco le condizioni per vincere
function userWin (){
	if (((userChoice === "pari") && (pari == true)) || ((userChoice === "dispari") && (pari == false))){
     return true
    } else { return false }
}
var messaggio = userWin()


if(userWin = true) {
 console.log("l'utente ha vinto")
} else if (userWin = false) {
 console.log("l'utente ha perso")
}   



console.log(userNum)
console.log(computerNum)
console.log(somma)

