/*L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. 
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). 
Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione).
Dichiariamo chi ha vinto. */



let playerPariODispari= parseInt(prompt("Player digita pari o dispari"))
let playerScegliNumero= parseInt(prompt("Player scegli un numero da 1 a 5"))


function numeriRandom(min,max){
    let random= Math.floor(Math.random() * (max-min)+1)+ min;
    return random
}

let computerScegliNumero= numeriRandom (1,5);

console.log(`Il numero scelto da Computer é: ${computerScegliNumero}`)
console.log(`Il numero scelto da Player é: ${playerScegliNumero}`)

let somma= playerScegliNumero + computerScegliNumero;


function pariODispari (numero){

    if(numero%2==0){

       return console.log(`Il numero scelto da Player é: ${playerScegliNumero}. Da computer é: ${computerScegliNumero}. Quindi é pari`);

    }else{
        return console.log(`Il numero scelto da Player é: ${playerScegliNumero}. Da computer é: ${computerScegliNumero}. Quindi é dispari`);
    }  



}

let risultato = pariODispari(somma)


if (risultato==playerScegliNumero){
    console.log("Player ha vinto")
}else{
    console.log("Computer ha vinto")
}




