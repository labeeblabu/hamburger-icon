const musicSection=document.getElementById('music-div')
const notification=document.querySelector('.notification')
const count=document.getElementById(`count`)
const cartItems=document.querySelector(`.cartItems`)
const totalPriceTag=document.getElementById(`totalPrice`)
const albums=document.querySelector(`#albums`)
console.log(albums);
let countItem=0
let totalPrice=0
let id;

window.addEventListener(`DOMContentLoaded`,() => {
    axios.get(`http://localhost:3000/products`).then(response => {
        
        let products=response.data.products
        console.log(products);
        for (const product of products) {
            let album=document.createElement(`div`)
            album.classList.add(`album`)
            album.id=product.id-1
            let title=document.createElement(`h1`)
            title.innerHTML=product.title
            album.appendChild(title)
            let imgContainer=document.createElement(`div`)
            imgContainer.classList.add(`imgContainer`)
            let img=document.createElement(`img`)
            img.src=product.imageUrl
            imgContainer.appendChild(img)
            album.appendChild(imgContainer)
            let details=document.createElement(`div`)

            details.classList.add(`details`)
            let span=document.createElement(`span`)
            span.innerText=`$`
            let price=document.createElement(`p`)
            price.innerHTML=`${product.price}`
            
            
            let div=document.createElement(`div`)
            div.classList.add(`priceDetails`)
            div.appendChild(span)
            div.appendChild(price)
           details.appendChild(div)
            let priceBtn=document.createElement(`button`)
            priceBtn.id=product.id-1
            priceBtn.classList.add(`priceBtn`)
            priceBtn.innerHTML=`ADD TO CART`
            details.appendChild(priceBtn)
            album.appendChild(details)
    
    albums.appendChild(album)
        }
        musicSection.addEventListener('click',(e) => {
    
            if (e.target.innerHTML===`ADD TO CART`) {
                id=e.target.id
                console.log(id);
                console.log(document.querySelector(`#cart${id}`));
                if (document.querySelector(`#cart${id}`)) {
                    alert(`item is already in the cart!!!`)
                    return
                }
                notification.classList.add(`active`)
                setTimeout(() => {
                    notification.classList.remove(`active`)
                }, 2000);
                notification.innerHTML=`<h3>Your product: ${products[id].title} is added to cart</h3>`
                countItem++
                count.innerHTML=`${countItem}`
                let div = document.createElement('div')
                div.innerHTML=` 
                <div id="cart${products[id].id-1}" class="item">
                <span  class="itemTopic"><img src=${products[id].imageUrl} alt=""><span>${products[id].title}</span></span>
                <span  class="priceTopic">${products[id].price}</span>
                <span  class="quantityTopic"><input value="1" type="text" name="" id=""><button class="removeBtn">REMOVE</button></span>
                </div>`
                cartItems.appendChild(div)
                
                totalPriceTag.innerHTML=parseFloat(totalPriceTag.innerHTML)+parseFloat(products[id].price)
            }
        
        })


    }).catch(error => {
        console.log(err);
    })
})





let database=[
    {title:`album 1`,
    content:` <div class="item">
    <span  class="itemTopic"><img src="https://images.pexels.com/photos/1389429/pexels-photo-1389429.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""><span>Album 1</span></span>
    <span  class="priceTopic">12.99</span>
    <span  class="quantityTopic"><input value="1" type="text" name="" id=""><button>REMOVE</button></span>
</div>`,price:12.99},
{title:`album 2`,
content:` <div class="item">
<span  class="itemTopic"><img src="https://images.pexels.com/photos/1021876/pexels-photo-1021876.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt=""><span>Album 2</span></span>
<span  class="priceTopic">14.99</span>
<span  class="quantityTopic"><input value="1" type="text" name="" id=""><button>REMOVE</button></span>
</div>`,price:14.99},
{title:`album 3`,
content:` <div class="item">
<span  class="itemTopic"><img src="https://images.pexels.com/photos/145707/pexels-photo-145707.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""><span>Album 2</span></span>
<span  class="priceTopic">9.99</span>
<span  class="quantityTopic"><input value="1" type="text" name="" id=""><button>REMOVE</button></span>
</div>`,price:9.99
},
{title:`album 4`,
content:` <div class="item">
<span  class="itemTopic"><img src="https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt=""><span>Album 2</span></span>
<span  class="priceTopic">19.99</span>
<span  class="quantityTopic"><input value="1" type="text" name="" id=""><button>REMOVE</button></span>
</div>`,price:19.99
}]

console.log(count);

const merchSection =document.getElementById(`merch-section`)
merchSection.addEventListener(`click`,(e)=>{

     if (e.target.innerHTML===`ADD TO CART`) {
        id=e.target.id
        notification.classList.add(`active`)
        setTimeout(() => {
            notification.classList.remove(`active`)
        }, 2000);
        notification.innerHTML=`<h3>Your product: ${id} is added to cart</h3>`
        countItem++
        count.innerHTML=`${countItem}`
        let div = document.createElement('div')
        let _id=e.target.parentNode.parentNode.id
        let imgSrc=document.querySelector(`#${_id} img`).src
        let title=document.querySelector(`#${_id} h1`).innerText
        let price=document.querySelector(`#${_id} p`).innerText
        console.log(price);

                div.innerHTML=` 
                <div id="${_id}" class="item">
                <span  class="itemTopic"><img src=${imgSrc} alt=""><span>${title}</span></span>
                <span  class="priceTopic">${price}</span>
                <span  class="quantityTopic"><input value="1" type="text" name="" id=""><button class="removeBtn">REMOVE</button></span>
                </div>`
                cartItems.appendChild(div)
                totalPriceTag.innerHTML=parseFloat(totalPriceTag.innerHTML)+parseFloat(price)
}
})









const cartbtn=document.getElementById(`cartBtn`)
const cartContainer=document.getElementById(`cartContainer`)


cartbtn.addEventListener(`click`,()=>{
    cartContainer.classList.add(`active`)
})
const seeTheCartBtn=document.getElementById(`seeTheCartBtn`)
seeTheCartBtn.addEventListener(`click`,()=>{
    cartContainer.classList.add(`active`)
})
const cartCloseBtn=document.getElementById(`cartCloseBtn`)
cartCloseBtn.addEventListener(`click`,()=>{
    cartContainer.classList.remove(`active`)
})

document.addEventListener(`click`,(e)=>{
    if (e.target.innerText==`REMOVE`) {
        totalPriceTag.innerText=totalPriceTag.innerText-
        document.querySelector(`#${e.target.parentNode.parentNode.id} .priceTopic` ).innerText
        count.innerText=count.innerText-1
        
        e.target.parentNode.parentNode.remove()
    }
    if (e.target.innerText==`PURCHASE`) {
        console.log(count.innerText);
        if (count.innerText==0) {
            alert(`pls add some products to purchase!!!`)
            return
        }else{
            cartItems.innerHTML=""
            count.innerText=0
            totalPriceTag.innerText=0
            alert(`thanks for the purchase!!!`)
        }
    }
})






