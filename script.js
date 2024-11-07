const amount = Number(prompt("Zadej počet poptávaných triček s potiskem a ihned obdržíš cenovou kalkulaci."))

if (amount <= 50) {
    price = 300;
} else if (amount > 50 && amount <= 200) {
    price = 250;
} else if (amount > 200 && amount <= 500) {
    price = 200;
} else if (amount > 500 && amount <= 1000) {
    price = 150;
} else {
    price = 120;
}

const order = amount * price
document.body.innerHTML += "<p>Vaše objednávka triček Vás bude stát " + order + " Kč bez DPH </p>"