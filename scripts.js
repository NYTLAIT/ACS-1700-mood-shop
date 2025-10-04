import data from './data.js'
const itemsContainer = document.querySelector('#items')

data.forEach(function (item) {
    const newDiv = document.createElement('div');
    newDiv.className = 'item'
    const img = document.createElement('img')
    img.src = item.image
    img.width = 300
    img.height = 300
    newDiv.appendChild(img)
    console.log(img)
    itemsContainer.appendChild(newDiv)

    const desc = document.createElement('p')
    desc.innerText = item.desc
    newDiv.appendChild(desc)
    const price = document.createElement('p')
    price.innerText = item.price
    newDiv.appendChild(price)

    const button = document.createElement('button')
    button.innerHTML = "Add to Cart" 
    button.className= 'add-to-cart'
    button.dataset.id = item.name
    button.dataset.price = item.price
    newDiv.appendChild(button)

})

const cart = []

const addItemToCart = (id, price) => {
    for (let i = 0; i < cart.length; i += 1) {
        if (cart[i].id === id) {
            cart[i].qty += 1
            return
        }
    }
    cart.push({ id, price, qty: 1 })
}

const displayCart = () => {
    let cartStr = ''
    for (let i = 0; i< cart.length; i += 1 ) {
        const item = cart[i]
        cartStr += `<li>
            <span>${item.id}</span>
            <input type="number" value="${item.qty}" class="input-qty" data-id="${item.id}">
            <span>${item.price}</span>
            <span>${(item.price * item.qty).toFixed(2)}</span>
            <button class="button-add" data-id="${item.id}">+</button>
            <button class="button-sub" data-id="${item.id}">-</button>
        </li>`
    const cartItems = document.querySelector('#cart-items')
    cartItems.innerHTML = cartStr
    }
}

document.body.addEventListener('click', (e) => {
    if (e.target.matches('.add-to-cart')) {
        addItemToCart(e.target.dataset.id, e.target.dataset.price)
        displayCart()
        console.log(cart)
    }
})