{
    const welcome = () => {
        console.log("Cześć Wszystkim! Poniżej moja praca domowa z M05 kalkulator walut"); 
    }

    const rateGBP = 5.28;
    const rateUSD = 4.64;
    const rateEUR = 4.72;
    const ratePLN = 1;

    const exchangeRate = (currency) => {
        switch  (currency) {
            case "PLN":
                return ratePLN;
            case "USD":
                return rateUSD;
            case "EUR":
                return rateEUR;
            case "GBP":
                return rateGBP;
        };   
    };

    const calculateResult = (amount, currency) => {
        switch (currency) {
            case "PLN":
                return amount / ratePLN;
            case "USD":
                return amount / rateUSD;
            case "EUR":
                return amount / rateEUR;
            case "GBP":
                return amount / rateGBP;
        };       
    };

    const updateResultsText = (amount, result, currency) => {
        const resultElement = document.querySelector(".js-result");
        resultElement.innerHTML = `${amount.toFixed(2)} PLN = ${result.toFixed(2)} ${currency}`;
    };

    const updateRateText = (rateElement) => {
        const exchangeRateElement = document.querySelector(".js-exchangeRate");
        exchangeRateElement.innerText = `${rateElement}`;
    };
    const onFormSubmit = (event) => {  
        event.preventDefault();  //blocking form send

        const amountElement = document.querySelector(".js-amountOfMany");
        const currencyElement = document.querySelector(".js-toAmount");
        
        const amount = +amountElement.value;
        const currency = currencyElement.value;

        const rateElement = exchangeRate(currency);

        const result = calculateResult(amount, currency);
        
        updateResultsText(amount, result, currency);
        updateRateText(rateElement);
    };
    
    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", onFormSubmit); 

        welcome();
    };
    init();
}
