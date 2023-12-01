// Definizione della funzione che permette la generazione di 5 numeri casuali
function generateRandomNumbers(){
    let randomNumbers = [];

    for(let i = 0; i < 5; i++){
        let randomNumber = Math.floor(Math.random() * 5) + 1;
        randomNumbers.push(randomNumber);
    }

    return randomNumbers;

}

// Definizione della funzione per la creazione del timer
function displayNumbers(){
    let numbers = document.getElementById('number');
    let randomNumbers = generateRandomNumbers();
    numbers.textContent = randomNumbers.join(', ');

    // Creazione del timer di 30 secondi
    setTimeout(function(){
        numbers.textContent = 'Numeri scomparsi';

        // Inserimento dei numeri scomparsi tramite l'uso del prompt
        let numbersAdd = prompt('Inserisci i numeri scomparsi');
        alert('Hai inserito i numeri: ' + numbersAdd);
    }, 30000);
}

displayNumbers();