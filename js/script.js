// Funzione che genera i numeri casuali
function generateRandomNumbers(){
    return Math.floor(Math.random() * 100 + 1);
}

// Pulisco il DOM dai numeri e mostro la stringa che invita l'utente ad inserire i numeri
function resetDom(){
    document.getElementById('number').innerText = 'Inserisci i numeri che hai appena visto';
}

// Definisco una funzione in cui vado a creare l'array dei numeri inseriti dall'utente
function getUserNumbers(){
    const user_numbers = [];

    while(user_numbers.length < 5){
        let number = parseInt(prompt('Inserisci il numero'));

        if(!isNaN(number) && !user_numbers.includes(number)){
            user_numbers.push(number);
        }
    }

    return user_numbers;
}

// Definisco la funzione che mi verifica quanti numeri l'utente ha indovinato
function checkGuessedNumber(user_numbers, random_numbers){
    let guessed = [];

    // Ciclo array dei numeri casuali
    for(let i = 0; i < user_numbers.length; i++){
        // Verifico che l'elemento i-esimo dell'array dei numeri inseriti dall'utente sia presente all'interno di quello dei numeri casuali
        if(random_numbers.includes(user_numbers[i])){
            // Se presente inserisco tale numero all'interno dell'array dei numeri indovinati
            guessed.push(user_numbers[i]);
        }
    }

    return guessed;
}

// Definizione della funzione che mostra i risultati
function printResult(array){
    let text;

    if(array.length == 1){
        text = `Hai indovinato un numero`;
    }
    else {
        text = `Hai indovinato ${array.length} numero. Ecco quali: ${array}`;
    }

    document.getElementById('results').innerHTML = text; 
    
}

// Inserire i numeri in un array
const array_numbers = [];

while(array_numbers.length < 5){
    let num = generateRandomNumbers();

    if(!array_numbers.includes(num)){
        array_numbers.push(num);
    }
}

// Mostrare i numeri a video (html)
document.getElementById('number').innerHTML = array_numbers;

setTimeout(resetDom, 5000);

// Permetto all'utente di inserire i suoi numeri dopo 30 secondi
setTimeout(function(){

    // Recupero i numeri inseriti dall'utente attraverso l'uso di una funzione
    let user_numbers = getUserNumbers();

    // Verifica di quanti e quali numeri l'utente ha indovinato
    let guessed_numbers = checkGuessedNumber(user_numbers, array_numbers);
    
    printResult(guessed_numbers);
}, 30000);



