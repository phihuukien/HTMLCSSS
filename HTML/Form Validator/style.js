var username = document.querySelector('#name')
var email = document.querySelector('#email')
var password = document.querySelector('#password')
var confirmpass = document.querySelector('#confirmpass')
var form = document.querySelector('form')

function showError(input,message){
    let parent = input.parentElement;
    let small  = parent.querySelector('small')
    parent.classList.add('erro')
    small.innerText = message
}

function showSucess(input){
    let parent = input.parentElement;
    let small = parent.querySelector('small')
    parent.classList.remove('erro')
    small.innerText=''
}
function checkEmptyError(listInput){
    let isEmptyError = false;
    listInput.forEach(input => {
        input.value = input.value.trim()
        if(!input.value){
            isEmptyError = true;
            showError(input, 'khong duoc de trong')
        }else{
            showSucess(input)
        }
    });
    return isEmptyError
   
}
function checkLeght(input , min , max){
    input.value = input.value.trim()
    if(input.value.length < min){
        showError(input, 'tên mầy để quá ngắn')
        return true
    }
    if(input.value.length > max){
        showError(input, 'tên mầy để quá dài')
        return true
    }

    return false

}
function checkEmail(input){
    const regexEmail =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    input.value = input.value.trim()
    let isEmailError = false;
   
    if( !regexEmail.test(input.value)){
        isEmailError = true;
        showError(input, 'Định Đạnh Email Không đúng')
    }
    return isEmailError
}

function confirmPas(input1, input2){
    input1.value = input1.value.trim()
    input2.value = input2.value.trim()
    if( input1.value !== input2.value){
        showError(input2, 'password ko khớp')
        return true
    }
    return false
}

form.addEventListener('submit', function(even){
    even.preventDefault()
    let isEmptyError = checkEmptyError([username,email,password,confirmpass])
    let isEmailError = checkEmail(email)
    let islenghtName =  checkLeght(username,6,20)
    let isConfirmPassword = confirmPas(password,confirmpass)

  
})