{
    const calculateBuy = (amount, currency) => {
        const rateBuyEUR = 4.71;
        const rateBuyUSD = 4.36;
        const rateBuyGBP = 5.31;
        const rateBuyCHF = 4.71;

        switch (currency) {
            case "EUR":
                return amount * rateBuyEUR;
            case "USD":
                return amount * rateBuyUSD;
            case "GBP":
                return amount * rateBuyGBP;
            case "CHF":
                return amount * rateBuyCHF;
        }
    }

    const calculateSell = (amount, currency) => {
        const rateSellEUR = 4.68;
        const rateSellUSD = 4.33;
        const rateSellGBP = 5.28;
        const rateSellCHF = 4.68;

        switch (currency) {
            case "EUR":
                return amount * rateSellEUR;
            case "USD":
                return amount * rateSellUSD;
            case "GBP":
                return amount * rateSellGBP;
            case "CHF":
                return amount * rateSellCHF;
        }
    }

    const onFormSubmit = (event) => {
        event.preventDefault();

        const currencyElement = document.querySelector(".js-currency");
        const amountElement = document.querySelector(".js-amount");
        const resultElement = document.querySelector(".js-result");
        const radioElement1 = document.querySelector(".js-radio1"); 

        const currency = currencyElement.value;
        const amount = +amountElement.value;

        if (radioElement1.checked === true) {

            let result = calculateBuy(amount, currency);

            resultElement.innerHTML = `Kwota jaką musisz zapłacić za ${amount} ${currency} wynosi: <strong>${result.toFixed(2)} zł</strong>`;
        } else {
            let result = calculateSell(amount, currency);
        
            resultElement.innerHTML = `Kwota jaką otrzymasz za ${amount} ${currency} wynosi: <strong>${result.toFixed(2)} zł</strong>`;
        }
    }

    const init = () => {

        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", onFormSubmit);
    }

    init();
}
