var ekey = document.querySelector('.keys p:last-child')
var elocation = document.querySelector('.location p:last-child')
var ewhich = document.querySelector('.which p:last-child')
var ecode = document.querySelector('.code p:last-child')
var ealter = document.querySelector('.alter')
var ebox = document.querySelector('.box')
var eresult = document.querySelector('.result')
document.addEventListener('keydown' , k=>{
    ekey.innerText = k.key
    elocation.innerText = k.location
    ewhich.innerText = k.which
    ecode.innerText = k.code
    eresult.innerHTML = k.code
    ealter.classList.add('hide')
    ebox.classList.remove('hide')
})