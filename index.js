import { menuArray } from "./data"
const items = document.getElementById('items')
const orderItems = document.getElementById('order-items')
const total = document.getElementById("total")
const orderDetails = document.getElementById('order')
const modal = document.getElementById('modal')
const fullName = document.getElementById("fullName")
let count = 0
let htmlString = ``
let orderString = ``
document.addEventListener("click", function(e){
    let id = ""
    if(e.target.dataset.pizza){
        id = e.target.dataset.pizza
        count = count + menuArray[id].price
        orderDetails.style.display = "flex"
        orderItems.innerHTML += orderIncrement(id)
        total.textContent = "$"+count
    }
    else if (e.target.dataset.hamburger){
        id = e.target.dataset.hamburger
        count = count + menuArray[id].price
        orderDetails.style.display = "flex"
        orderItems.innerHTML += orderIncrement(id)
        total.textContent = "$"+count
    }
    else if (e.target.dataset.beer){
        id = e.target.dataset.beer
        count = count + menuArray[id].price
        orderDetails.style.display = "flex"
        orderItems.innerHTML += orderIncrement(id)
        total.textContent = "$"+count
    }
    else if (e.target.dataset.repizza){
        id = e.target.dataset.repizza
        count = count - menuArray[id].price
        orderDetails.style.display = "flex"
        total.textContent = "$"+count
        document.querySelector('[data-repizza="0"]').parentElement.parentElement.parentElement.innerHTML = `` 
    }
    else if (e.target.dataset.rehamburger){
        id = e.target.dataset.rehamburger
        count = count - menuArray[id].price
        orderDetails.style.display = "flex"
        total.textContent = "$"+count
        document.querySelector('[data-rehamburger="1"]').parentElement.parentElement.parentElement.innerHTML = ``
    }
    else if (e.target.dataset.rebeer){
        id = e.target.dataset.rebeer
        count = count - menuArray[id].price
        orderDetails.style.display = "flex"
        total.textContent = "$"+count
        document.querySelector('[data-rebeer="2"]').parentElement.parentElement.parentElement.innerHTML = ``
        
    }
    if(count === 0){
        orderDetails.style.display = "none"
    }
    if(e.target.id === 'complete'){
        modal.style.display = "block"
    }
    if(e.target.id === 'pay'){
        e.preventDefault();
        if (fullName.value !== ''){
            modal.style.display = 'none'
            orderDetails.innerHTML = `
            <div class="Thanks">
                <p>Thanks, ${fullName.value}! Your order's on the way</p>
            </div>
        `
        }
    }
})
function render(){
    menuArray.forEach(function(menuItem){
    htmlString += `
    <div class="item">
        <div class="item-im-des">
        <div class="image">${menuItem.emoji}</div>
            <div class="item-desc">
                <h4>${menuItem.name}</h4>
                <p>${menuItem.ingredients}</p>
                <h5>$${menuItem.price}</h5>
            </div>
        </div>
        <div class="item-btn" data-${menuItem.name}="${menuItem.id}" >+</div>
    </div>
`
})
items.innerHTML = htmlString
}

function orderIncrement(id){
    orderString = `
    <div class="indie-item">
        <div class="collection">
            <h4>${menuArray[id].name}<h4>
            <p data-re${menuArray[id].name}="${menuArray[id].id}">Remove</p>
        </div>
        <p>$${menuArray[id].price}</p>
    <div>
    `
    return orderString
}

render()
