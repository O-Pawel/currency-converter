let radioElement1 = document.querySelector(".js-radio1");
let currencyElement = document.querySelector(".js-currency");
let amountElement = document.querySelector(".js-amount");
let formElement = document.querySelector(".js-form");
let resultElement = document.querySelector(".js-result");

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let currency = currencyElement.value;

    let amount = +amountElement.value;

    let result;

    if (radioElement1.checked === true) {
        switch (currency) {
            case "EUR":
                result = amount * 4.71;
                break;
            case "USD":
                result = amount * 4.36;
                break;
            case "GBP":
                result = amount * 5.31;
                break;
            case "CHF":
                result = amount * 4.71;
                break;
        }
        resultElement.innerHTML = `Kwota jaką musisz zapłacić za ${amount} ${currency} wynosi: <strong>${result.toFixed(2)} zł</strong>`;
    } else {
        switch (currency) {
            case "EUR":
                result = amount * 4.68;
                break;
            case "USD":
                result = amount * 4.33;
                break;
            case "GBP":
                result = amount * 5.28;
                break;
            case "CHF":
                result = amount * 4.68;
                break;
        }
        resultElement.innerHTML = `Kwota jaką otrzymasz za ${amount} ${currency} wynosi: <strong>${result.toFixed(2)} zł</strong>`;
    }
});