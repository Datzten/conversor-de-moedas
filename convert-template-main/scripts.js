const  amount = document.getElementById("amount");
// Event listener to format the input value as currency, remove any non-numeric characters and ensure only one decimal separator is present

amount.addEventListener("input", ()=>{
    let hasSeparator = false;
    amount.value= amount.value
    .replace(/[^\d.,]/g, "")
    .replace(/[.,]/g, (separator)=>{
        if(hasSeparator)
            return "";
        hasSeparator =true;
        return ",";
    });
});

