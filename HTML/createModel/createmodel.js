var btnOpen = document.querySelector('.open-model-btn')
var model = document.querySelector('.model')
var btnClose = document.querySelector('.model_footer button')
var iconClose = document.querySelector('.model_header i')
function toggleModel(e){
    model.classList.toggle('hide')
}
btnOpen.addEventListener('click',toggleModel)

btnClose.addEventListener('click' ,toggleModel)
 iconClose.addEventListener('click' ,toggleModel)


// model.addEventListener('click' ,function(e){
//     if(e.target == e.currentTarget){
//         toggleModel()
//     }
// })
// btnOpen.addEventListener('click',function(){
//     model.classList.add('hide')
// })

// iconClose.addEventListener('click',function(){
//     model.classList.remove('hide')
//  })
//  btnClose.addEventListener('click',function(){
//     model.classList.remove('hide')
//  })
//  model.addEventListener('click',function(){
//     model.classList.remove('hide')
//  })
