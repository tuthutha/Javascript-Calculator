function bodyMassIndex() {
    var weight = document.querySelector('#weight').value;
    var height = document.querySelector('#height').value;
    var resultElement = document.querySelector('#result');

    var BMI = (weight / (height * 2));
    var html = '';
    
    if (BMI < 18.5) {
        console.log("Thiếu cân");
        html = "Thiếu cân"
    } else if (BMI >= 18.5 && BMI < 24.9) {
        console.log("Cân nặng bình thường");
        html = "Cân nặng bình thường"
    } else if (BMI >= 25 && BMI < 29.9) {
        console.log("Thừa cân");
        html = "Thừa cân"
    } else {
        html = "Béo phì"
    }

    resultElement.innerHTML = `Kết quả: ${html}`;
}


