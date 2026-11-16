const amount = document.getElementById("amount");
const form = document.querySelector("form");
const currency = document.getElementById("currency");
const footer = document.querySelector("main footer");
const description = document.getElementById("description");
const result = document.getElementById("result");

const USD = 5.35
const EUR = 6.4
const GBP = 7.8

// Event listener to format the input value as  currency, remove any non-numeric characters and ensure only one decimal separator is present

amount.addEventListener("input", ()=>{
    let hasSeparator = false;
    amount.value= amount.value
    .replace(/[^\d.,]/g, "")
    .replace(/[.,]/g, (separator)=>{
        if(hasSeparator)
            return "";
        hasSeparator =true;
        return ".";
    });
});

form.onsubmit = (event)=>{
    event.preventDefault();

    switch(currency.value){
        case "USD":
         convertCurrency(amount.value, USD, "$");   
        break;
        case "EUR":
            convertCurrency(amount.value, EUR, "€");
        break;
        case "GBP":
            convertCurrency(amount.value, GBP, "£");
        break;
    }
}

function convertCurrency(amount, price, symbol) {
    try {
        description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`
        let total = amount * price
        result.textContent = formatCurrencyBRL(total)

        footer.classList.add("show-result")     
    }catch (error) {
        console.error("Error converting currency:", error);
    }
}

function formatCurrencyBRL(value){
    return Number(value).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    })
}

    
