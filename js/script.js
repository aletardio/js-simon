// Definizione della funzione che permette la generazione di 5 numeri casuali
function generateRandomNumbers(){
    let randomNumbers = [];

    for(let i = 0; i < 5; i++){
        let randomNumber = Math.floor(Math.random() * 5) + 1;
        randomNumbers.push(randomNumber);
    }

    return randomNumbers;

}

// Dichiarazione della variabile
let result = generateRandomNumbers();

// Creazione del timer di 30 secondi
setTimeout(function(){
    result;
}, 30000);
console.log(result);

document.getElementById('number').innerHTML = `${result}`;