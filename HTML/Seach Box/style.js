// var search_btn = document.querySelector('.search_box_btn')
// var search_box = document.querySelector('.search_box')

// function toggleModel(){
//     search_box.classList.toggle('open')
// }
// search_btn.addEventListener('click',toggleModel)
// CACCH 2 
  var search_btn = document.querySelector('.search_box_btn')
  search_btn.addEventListener('click',function(){
      this.parentElement.classList.toggle('open')
      this.previousElementSibling.focus();
      })