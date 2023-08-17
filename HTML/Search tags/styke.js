var conten = document.querySelector('.content')
var input = document.querySelector('.content input')
 var  tags = ['Nodejs','Reactjs']
 function  createTags(){
     conten.innerHTML = ''
     
     for(let i = 0;i<tags.length;i++){
         const element = tags[i];
        conten.innerHTML+=`<li>
                                ${element}
                                <i class="fas fa-times " onclick="removeTag(${i})"></i>
                            </li>
        `
     }
     conten.appendChild(input)
     input.focus()
 }
 createTags()

 input.addEventListener('keydown', function(event){
  console.log(event.key);
  if(event.key == 'Enter'){
    //   console.log();
      tags.push(input.value.trim())
      input.value=''
      createTags()
  }
 })
 function removeTag(index){
 
    tags.splice(index, 1)
    createTags()
    
 }
 function removeall(){
     tags=[]
     createTags()
 }