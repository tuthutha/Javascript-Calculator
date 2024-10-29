function showPassword() {
    var passwordValue = document.querySelector('#password').value;
    setHTML('.text', passwordValue);  
}

function setHTML(selector, value) {
    var element = document.querySelector(selector);
    element.innerHTML = value;
} 

function checkPasswordStrength() {
    var password = document.querySelector('.password').value;
    var messageElement = document.querySelector('#message');
    if (password.length < 4) {
        messageElement.innerHTML = 'Mật khẩu yếu';
        messageElement.style.color = '#E74C3C'
    } else if (password.length >= 4 && password.length < 8) {
        messageElement.innerHTML = 'Mật khẩu trung bình';
        messageElement.style.color = 'yellow'
    } else if (password.length >= 8) {
        messageElement.innerHTML = 'Mật khẩu mạnh';
        messageElement.style.color = '#26d730'
    }
}

document.querySelector('#password').addEventListener('input', function() {
    checkPasswordStrength(); 
});