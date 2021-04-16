//chiedo all'utente di scegliere tra pari o dispari

var userChoice;

function validaScelta(choice){
    var choice = prompt("Scegli tra pari o dispari");                 // richiesta input
    choice = choice.toLowerCase()                                    // trasformazione in lowercase
        while ((choice != "pari") && (choice != "dispari")){        // SE non soddisfa queste condizioni...
            var choice = prompt("Scegli tra pari o dispari");      // ripeti la richiesta
            ((choice === "pari") || (choice === "dispari"));      // finchè...
        }
    console.log("l'utente ha scelto " + choice)                  //infine restituisce...
}
   validaScelta(userChoice)                                    //applico la funzione alla variabile 


//chiedo all'utente un numero da 1 a 5
var userNum = parseInt(prompt("Scegli un numero da 1 a 5"))                   
         
function validaNumero(num){
    while ((num >= parseInt(6)) || (num <= parseInt(-1))) {                //se il numero presenta una di queste caratteristiche...
        var num= parseInt(prompt("Scegli un numero da 1 a 5"));           //ripeti richiesta
        ((num <= 5) && (num >= 0));                                      //finchè...
    }     
    console.log("l'utente ha scelto " + num)                           //infine restituisce...
}
    validaNumero(userNum)                                             //applico la funzione alla variabile 

    
//chiedo al computer un numero da 1 a 5                              
var computerNum = parseInt( Math.floor(Math.random() * 5) + 1);         
    console.log("il computer ha prodotto " + computerNum)             

//creo una funzione per addizionare i valori                    
function addizione(num1, num2) {                    
    var risultato = num1 + num2;                  
    return risultato;
}


 //var "pari" assegnata alle somme multiple di 2
var pari     
var somma = addizione(userNum, computerNum)      
    console.log("la somma è " + somma)     
                           
	if (somma %2 == 0){                           
		pari = true;
        console.log("è pari")
	}else {
		pari = false;
        console.log("è dispari")
    }

//l'utente vince se...

    if (((userChoice === "pari") && (pari === true)) || ((userChoice === "dispari") && (pari === false))){
        userwin = true
        console.log("l'utente ha vinto")
       } else {
           userwin = false 
           console.log("l'utente ha perso")
       }

       