let userKm = Number.parseInt(prompt("Inserisci il numero di KM che vuoi percorrere"), 10)
let userAge = prompt("Inserisci la tua età")

let price = userKm * 0.276

if(userAge<18){
    let discount = ((price / 100) * 21).toFixed(2);
    let finalPrice = (price - discount).toFixed(2);

    console.log(`Vuoi percorrere ${userKm}km. Il tuo sconto è ${discount}€, quindi il prezzo totale è di ${finalPrice}€`);
} else if(userAge>65){
        let discount = ((price / 100) * 42).toFixed(2);
        let finalPrice = (price - discount).toFixed(2);

        console.log(`Vuoi percorrere ${userKm}km. Il tuo sconto è ${discount}€, quindi il prezzo totale è di ${finalPrice}€`);
        } else {

            console.log(`Vuoi percorrere ${userKm}km. Non hai diritto ad alcuno sconto, quindi il prezzo totale è di ${price}€`);
}

