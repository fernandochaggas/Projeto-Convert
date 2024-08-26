const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")
const currencyToConverted = document.querySelector(".currency-to-converted")





function convertValue() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConverted = document.querySelector(".currency-value-to-converted") // Valor a converter
    const currencyValueConverted = document.querySelector(".currency-value") //Valor convertido


    const dolarToday = 5.48
    const euroToday = 6.13
    const libraToday = 7.26
    const bitcoinToday = 351.292
    const realToday = 1.00





    if (currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(inputCurrencyValue / dolarToday)
    }

    if (currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
        }).format(inputCurrencyValue / euroToday)
    }

    if (currencySelect.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP",
        }).format(inputCurrencyValue / libraToday)
    }

    if (currencySelect.value == "Bitcoin") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("btc", {
            style: "currency",
            currency: "BTC",
        }).format(inputCurrencyValue / bitcoinToday)
    }

    if (currencyToConverted.value == "real") {
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue / realToday)
    }

    if (currencyToConverted.value == "dolar") {
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }

    if (currencyToConverted.value == "euro") {
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }

    if (currencyToConverted.value == "libra") {
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)
    }

    if (currencyToConverted.value == "bitcoin") {
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("btc", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / bitcoinToday)
    }

}
// Parte usada na para mudança de bandeiras 
function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-image")

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar Americano"
        currencyImage.src = "./assets/moeda-dolar.png"

    }

    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/moeda-euro.png"
    }

    if (currencySelect.value == "libra") {
        currencyName.innerHTML = "Libra"
        currencyImage.src = "./assets/libr.png"
    }

    if (currencySelect.value == "Bitcoin") {
        currencyName.innerHTML = "Bitcoin"
        currencyImage.src = "./assets/bitc.png"
    }

    convertValue()

}

function changeConvert() {
    const convertName = document.getElementById("convert-name")
    const convertImage = document.querySelector(".img-convert")

    if (currencyToConverted.value == "dolar") {
        convertName.innerHTML = "USD Dólar"
        convertImage.src = "./assets/moeda-dolar.png"
    }

    if (currencyToConverted.value == "euro") {
        convertName.innerHTML = "Euro"
        convertImage.src = "./assets/moeda-euro.png"
    }

    if (currencyToConverted.value == "libra") {
        convertName.innerHTML = "Libra"
        convertImage.src = "./assets/libr.png"
    }

    if (currencyToConverted.value == "bitcoin") {
        convertName.innerHTML = "Bitcoin"
        convertImage.src = "./assets/bitc.png"
    }

    if (currencyToConverted.value == "real") {
        convertName.innerHTML = "Real"
        convertImage.src = "./assets/moeda-real.png"
    }

    convertValue()


}

currencyToConverted.addEventListener("change", changeConvert)
currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValue)