var range = document.querySelector('.range')
var process = document.querySelector('.process')
var text = document.querySelector('.process span')


range.addEventListener('mousemove' , function(e){
    var processWith = e.pageX-this.offsetLeft
    var persent = processWith / this.offsetWidth * 100
    persent = Math.round(persent);
    updateProsuss(persent)
})
function updateProsuss(persent){
    process.style.width=`${persent}%`
    text.innerText = persent+'%'
    
}
updateProsuss(30)