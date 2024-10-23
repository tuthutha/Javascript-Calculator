function convertUSDToVND() {
    var usd = document.querySelector('#USD').value;
    usd = parseFloat(usd); 
    
    var errorMessageElement = document.querySelector('#error-message');

    errorMessageElement.innerHTML = '';
    if (isNaN(usd)) {
        errorMessageElement.innerHTML = "Vui lòng nhập số tiền hợp lệ!";
        return;
    }
    var usdAmount = usd.toLocaleString()
    var vnd = (usd * 25400).toLocaleString();
    var resultElement = document.querySelector('#VND');
    resultElement.value = vnd;
    document.querySelector('#USD').value = usdAmount; 
}


