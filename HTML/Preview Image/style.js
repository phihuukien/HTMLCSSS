var upload = document.querySelector('#mypicture')
var pre = document.querySelector('.preview')
var erro = document.querySelector('.error')
upload.addEventListener('change', function(){
    var showimg = upload.files[0]
    // console.log(showimg)
    if(!showimg){
        return
    }
    if(!showimg.name.endsWith('.jpg')){
        erro.innerHTML=`Hinh anh phai thuoc định dạng ipeg`
        return
    }else{
        erro.innerHTML=``
    }
    if(!showimg.size / (1024 *2024)>5){
        erro.innerHTML=`chi đc uplaod ảnh <5mb`
        return
    }else{
        erro.innerHTML=``
    }
    var img = document.createElement('img')
    img.src = URL.createObjectURL(showimg)
    pre.appendChild(img)
})