var btnsuccess = document.querySelector('.container .success')
var btnwarning = document.querySelector('.container .warning')
var btnerror = document.querySelector('.container .error')

btnsuccess.addEventListener('click', function(){
    creatoast('succes')
})
btnwarning.addEventListener('click', function(){
    creatoast('Warning')
})
btnerror.addEventListener('click', function(){
    creatoast('Error')
})


function creatoast(status){
    let elemet = `<i class="far fa-check-circle"></i> 
    <span>This is a Success message</span>`
    switch (status) {
        case 'succes':
            elemet = `<i class="far fa-check-circle"></i> 
            <span>This is a Success message</span>`
            break;
            case 'Warning':
                elemet = `<i class="fas fa-exclamation-circle"></i>
                <span>This is a warning message</span>`
                break;
                case 'Error':
                    elemet = `<i class="fas fa-exclamation-triangle"></i>
                    <span>This is a Error message</span>`
                    break;
    }

    var toast = document.createElement('div')
    toast.classList.add('toast')
    toast.classList.add(status)
    toast.innerHTML=` ${elemet}
        <span class="coutdown"></span>`

    var toastslist = document.getElementById('toasts')
    toastslist.appendChild(toast)

    setTimeout(function(){
        toast.style.animation = 'slide-hide 2s ease forwards'
    },3000)
    setTimeout(function(){
        toast.remove();
    },5000)
}