//chiedo all'utente di scegliere tra pari o dispari
var userChoice = prompt("Scegli tra pari o dispari")

//rendo la scelta in lowercase
userChoice = userChoice.toLowerCase() 

//impedisco un input errato
while ((userChoice != "pari") && (userChoice != "dispari")){
    var userChoice = prompt("Scegli tra pari o dispari");
    ((userChoice === "pari") || (userChoice === "dispari"));
}
    console.log("l'utente ha scelto " + userChoice)


//chiedo all'utente un numero da 1 a 5
var userNum = parseInt(prompt("Scegli un numero da 1 a 5"))

//impedisco un input errato
while ((userNum >= parseInt(6)) || (userNum <= parseInt(-1))) {
    var userNum = parseInt(prompt("Scegli un numero da 1 a 5"));
    ((userNum <= 5) || (userNum >= 0))
}
    console.log("l'utente ha scelto " + userNum)

//chiedo al computer un numero da 1 a 5
var computerNum = parseInt( Math.floor(Math.random() * 5) + 1);
    console.log("il computer ha prodotto " + computerNum)

//creo una funzione per addizionare i valori
function addizione(userNum, computerNum) {
    var risultato = userNum + computerNum;
    return risultato;
}
var somma = addizione(userNum, computerNum)
    console.log("la somma è " + somma)

//funzione per calcolare se la somma è pari
function pari(somma) {
	if (somma %2 == 0)
		return true;
	else
		return false;
}

    if(pari = true){
        console.log("è pari")
    } else if (pari = false){
        console.log("è dispari")
    }


//confronto il risultato con l'input dell'utente e ne stabilisco le condizioni per vincere
function userWin() {
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

