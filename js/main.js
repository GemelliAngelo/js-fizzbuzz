// Scrivi un programma che stampi i numeri da 1 a 100,
// ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

// ! RACCOLTA DATI
// * Stampo i numeri da 1 a 100
let numbersElement = document.getElementById("numbersList");
let numbersOutput = "";

for (let i = 1; i <= 100; i++) {
  numbersOutput = `NUMERO: ${i}`;
  if (i % 3 === 0) {
    numbersOutput = "FIZZ";
  } else if (i % 5 === 0) {
    numbersOutput = "BUZZ";
  }

  if (i % 3 === 0 && i % 5 === 0) {
    numbersOutput = "FIZZBUZZ";
  }
  console.log(numbersOutput);

  numbersElement.innerHTML += numbersOutput + "<br />";
}
