console.log("Cześć Wszystkim! Poniżej moja praca domowa z M04 kalkulator walut");
{
let amountElement = document.querySelector(".js-amountOfMany");
let toElement = document.querySelector(".js-toAmount");
let formElement = document.querySelector(".js-form");
let resultElement = document.querySelector(".js-result");
let exchangeRateElement = document.querySelector(".js-exchangeRate");

let GBP = 5.28;
let USD = 4.64;
let EUR = 4.72;
let PLN = 1;

formElement.addEventListener("submit", (event) => {  
    event.preventDefault();  //blocking form send

    let amount = amountElement.value;
    let exchangeRate = toElement.value;

    switch (exchangeRate) {
        case "PLN":
            result = amount / PLN;
            exchangeRateElement.innerText = PLN;
        case "USD":
                result = amount / USD;
                exchangeRateElement.innerText = USD;
        case "EUR":
            result = amount / EUR;
            exchangeRateElement.innerText = EUR;
        case "GBP":
            result = amount / GBP;
            exchangeRateElement.innerText = GBP;  
    }       
    resultElement.innerHTML = `${result.toFixed(2)} ${exchangeRate}`;
})
}
