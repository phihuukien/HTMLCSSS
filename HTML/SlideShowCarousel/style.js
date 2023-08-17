var main_img = document.querySelector('.img_show')
var list_img = document.querySelectorAll('.list_img img')
var list_div = document.querySelectorAll('.list_img div')
var prev = document.querySelector('.left')
var next = document.querySelector('.rigth')

var currenIndex = 0 ;
function updateImgByIndex(index){
    list_div.forEach(item=>{
        item.classList.remove('active')
    })

    currenIndex = index;
    main_img.src = list_img[index].getAttribute('src')
    list_img[index].parentElement.classList.add('active')
}
list_img.forEach((imgElemt,index)=>{
    imgElemt.addEventListener('click', e=>{
        main_img.style.opacity='0';
        setTimeout(() => {
            updateImgByIndex(index)
            main_img.style.opacity='1';
        }, 400);
    })
})

updateImgByIndex(0)
prev.addEventListener('click' , function(){
    if (currenIndex == 0) {
        currenIndex = list_img.length-1;
    }else{
        currenIndex--;
    }
       
         main_img.style.animation=''
         setTimeout(() => {
            updateImgByIndex(currenIndex)
            main_img.style.animation='slideleft 1s ease-in-out forwards'
         }, 200);
})
next.addEventListener('click' , function(){
    if (currenIndex == list_img.length-1) {
        currenIndex = 0;
    }else{
        currenIndex++;
    }
         main_img.style.animation=''
         setTimeout(() => {
            updateImgByIndex(currenIndex)
            main_img.style.animation='slideright 1s ease-in-out forwards'
         }, 200);
   })