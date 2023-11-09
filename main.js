/*
Consegna:
Scrivi un programma che stampi in console i numeri da 1 a 100, ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”. Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
Prima di partire a scrivere codice poniamoci qualche domanda:
Come faccio a sapere se un numero è divisibile per un altro ? Abbiamo visto qualcosa di particolare che possiamo usare ?
    Consigli del giorno:
Scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
Proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo “a mano”
*/

'use strict'

const groupElement = document.querySelector('.group-element')
console.log(groupElement)

for (let i = 1; i <= 100; i++) {

    const listElement = document.createElement('li')

    if (i % 3 === 0 && i % 5 === 0) {
        console.log('fizzbuzz');
        listElement.append('fizzbuzz');
        listElement.classList.add('fizzbuzz')
    } else if (i % 3 === 0) {
        console.log('fizz');
        listElement.append('fizz');
        listElement.classList.add('fizz')

    } else if (i & 5 === 0) {
        console.log('buzz');
        listElement.append('buzz');
        listElement.classList.add('buzz')

    } else {
        console.log(i);
        listElement.append(i);
    }

    groupElement.append(listElement)
}

groupElement