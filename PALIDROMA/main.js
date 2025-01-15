// Chiedere all’utente di inserire una parola e creare una funzione per capire se la parola inserita è palindroma

let scegliUnaParola= prompt ("Digita una parola");

console.log(`La parola scelta é: ${scegliUnaParola}`)


function reverseString(parolaDaControllare){
    // Trasformare la parola in array (con .split). 
    // Con .reverse cambiare l'ordine degli elementi dell'array
    // Con .join ritrasformare l'array in una stringa

    return parolaDaControllare.split("").reverse().join("") 

}

    //Risultato della parola al contrario
console.log(`La parola al contrario é: ${reverseString(scegliUnaParola)}`)

    //Verificare le condizioni di quando una parola é polidroma e di quando non lo é

if(scegliUnaParola==reverseString(scegliUnaParola)){
    console.log(`La parola ${scegliUnaParola} é Polidroma`)
}else{
    console.log(`La parola ${scegliUnaParola} non é Polidroma`)
}