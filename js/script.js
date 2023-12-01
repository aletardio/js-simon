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
    numbers.textContent = randomNumbers;

    // Creazione del timer di 30 secondi
    setTimeout(function(){
        numbers.textContent = 'Numeri scomparsi';

        let numbersDiscover = [];
        let attempt = 5;

        // Definizione della funzione per dire quanti e quali numeri sono stati individuati
        function found_number(){
            if(attempt > 0) {
                let numberAdded = prompt('Inserisci i numeri che hai memorizzato');
                let numberAddedInt = parseInt(numberAdded);

                if(!isNaN(numberAddedInt) && randomNumbers.includes(numberAddedInt)){
                    numbersDiscover.push(numberAddedInt);
                    attempt--;
                    found_number();
                }
                else{
                    alert('Numero non valido o non corrispondente a quelli visti');
                    found_number();
                }
            }
            else {
                // Tutti i numeri sono stati inseriti
                alert('Hai individuato ' + numbersDiscover.length + ' numeri: ' + numbersDiscover.join(', '));
            }
        }

        // Richiesta dei numeri dopo i 30 secondi
        found_number();
        numbers.textContent = 'Hai individuato ' + numbersDiscover.length + ' numeri: ' + numbersDiscover.join(', ');

    }, 30000);
}

// Avvio della visualizzazione dei numeri
displayNumbers();