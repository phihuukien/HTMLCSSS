var images = document.querySelectorAll('.image img')
var gallery = document.querySelector('.gallery')
var galImg = document.querySelector('.gallery_img img')
var close = document.querySelector('.close')
var prev = document.querySelector('.prev')
var next = document.querySelector('.next')
var currenIndex= 0;
function showGallary(){
    if(currenIndex == 0){
         prev.classList.add('hide')
     }else{
        prev.classList.remove('hide')
     }
     if(currenIndex == images.length){
    
        next.classList.add('hide')
    }else{
       next.classList.remove('hide')
    }
    galImg.src = images[currenIndex].src
    gallery.classList.add('show')
}
images.forEach((item, index) => {
    item.addEventListener('click',function(){
        currenIndex = index;
        showGallary()

    })
});
 close.addEventListener('click',function(){
    gallery.classList.remove('show')
 })
 document.addEventListener('keydown',function(e){
    if(e.keyCode == 27){
        gallery.classList.remove('show')
    }
 })
 prev.addEventListener('click' , function(){
     if(currenIndex >0){
         currenIndex--;
         showGallary()
     }
 })
 next.addEventListener('click' , function(){
    if(currenIndex < images.length){
        currenIndex++;
        showGallary()
    }
})
