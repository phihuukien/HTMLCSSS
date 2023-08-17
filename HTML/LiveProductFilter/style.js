
fetch('http://fakestoreapi.com/products')
.then(res=>{
    return res.json()
})
.then(mocData=>{
    var products = document.querySelector('.list_Product')
    products.innerHTML=''
    mocData.forEach(item => {
        var newProduct = document.createElement('div')
        newProduct.classList.add('product')
        newProduct.innerHTML = `
      
        <img src="${item.image}" alt="">
        <div class="infor">
            <div class="name">${item.title}</div>
            <div class="price">${item.price}</div>
        </div>
    
        `
        products.appendChild(newProduct)
    })
})
var searchInput =  document.querySelector('.search input')
searchInput.addEventListener('input', function(e){
    let txtSearch = e.target.value.trim().toLowerCase()
    var listProDom = document.querySelectorAll('.product')
    listProDom.forEach(items=>{
        if (items.innerText.toLowerCase().includes(txtSearch)) {
            items.classList.remove('hide')
        } else {
            items.classList.add('hide')
        }
    })
})
