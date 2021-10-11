//chiedi quanti km vuole percorrere

const numeroKm = prompt ('quanti chilometri vuoi percorrere?')
console.log ('I Km che vuole percorrere sono ' + numeroKm)


//chiedi quanti anni ha

const numberAge = prompt ('quanti anni hai?')
console.log ('gli anni che ha sono ' +  numberAge)


//prezzo biglietto
var prezzoBiglietto = 0.21 * numeroKm

//condizioni


if (numberAge < 18) {
   prezzoBiglietto = prezzoBiglietto * 0.8 
}else if (numberAge > 65) {
   prezzoBiglietto = prezzoBiglietto * 0.6
}
console.log('Il prezzo del biglietto è ' + (Math.round(prezzoBiglietto * 100) / 100) + ' €')


document.getElementById ('prezzoBiglietto').innerHTML= 'Il prezzo del biglietto è ' + (Math.round(prezzoBiglietto * 100) / 100) + ' €'