const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

function convertValues() { /*função referente a ação de converter o valor colocado no input ao aperta o botão*/

    const inputCurrencyValue = document.querySelector(".input-currency").value //valor obtido do input//
    const currencyValueToConvert = document.querySelector(".valor-converter") //class referente ao valor do real//
    const currencyValueConverted = document.querySelector(".valor") //class referente ao valor convertido para dolar//

    console.log(currencySelect.value)

    const dolarToday = 5.6467 /*valor do dolar do dia*/
    const euroToday = 6.4350 /*valor do euro do dia*/


    if /*se o select estiver selecionado o valor de dolar, entre aqui*/(currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML/*valor refente ao dolar*/ = new Intl.NumberFormat("en-us", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)  // isso coloca o valor convertido na area referente ao valor do dolar //


    }
    if /*se o select estiver selecionado o valor de euro, entre aqui*/ (currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
        }).format(inputCurrencyValue / euroToday)

    }

    currencyValueToConvert.innerHTML/*valor referente ao real*/ = new Intl.NumberFormat /*codigo para formatar moeda*/("pt-br", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)  // isso conecta o valor que foi colocado no input para o valor referente ao real//

}

function changeCurrency /* função para mudar o nome da moeda ao mudar o select*/() {
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".moeda-img2")



    if /*se o select estiver selecionado o valor de dolar, entre aqui*/(currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar americano"
        currencyImage.src = "./assest/dolar.png"
    }

    if /*se o select estiver selecionado o valor de dolar, entre aqui*/(currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assest/euro.png"
    }

    convertValues()


}

currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues);
