const passwordBox = document.getElementById('password');
const passwordBtn = document.getElementById('btn');
const copybtn = document.getElementById('copy');

const lowerCase = 'abcdefghijklmnopqrstuvwnyz';
const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWNYZ';
const number = '0123456789';
const symbol = '@#$%^&*/><|][{}+-';
const length = 8;
const allChars = lowerCase + upperCase + number + symbol;

passwordBtn.addEventListener('click',()=>{
    let password = '';
     password +=  lowerCase[Math.floor(Math.random() * lowerCase.length)]
     password += upperCase[Math.floor(Math.random() * upperCase.length)]
     password += number[Math.floor(Math.random() * number.length)]
     password += symbol[Math.floor(Math.random() * symbol.length)]
     
     while(length > password.length){
        password += allChars[Math.floor(Math.random() * allChars.length)]
     }

    passwordBox.value = password;
})

copybtn.addEventListener('click',()=>{
    passwordBox.select()
    document.execCommand('copy');
})






