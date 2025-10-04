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

    itemsContainer.appendChild(newDiv)
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

const addToCart = id => {
    for (let i = 0; i < cart.length; i += 1) {
        const item = cart[i]
        if (id === item.id) {
            item.qty += 1
            return
        }
    }
}
const removeFromCart = id => {
    for (let i = 0; i <cart.length; i += 1 ) {
        const item = cart[i]
        if (id === item.id) {
            item.qty -= 1
            if (item.qty === 0) {
                cart.splice(i, 1)
            }
            return
        }
    }
}

const displayCart = () => {
    let cartStr = ''
    if (cart.length === 0) {
        cartStr = '<li>Your cart is empty</li>'
    } else {
        for (let i = 0; i < cart.length; i += 1 ) {
            const item = cart[i]
            cartStr += `<li>
                <span>${item.id}</span>
                <input type="number" value="${item.qty}" class="input-qty" data-id="${item.id}">
                <span>${item.price}</span>
                <span>${(item.price * item.qty).toFixed(2)}</span>
                <button class="button-add" data-id="${item.id}">+</button>
                <button class="button-sub" data-id="${item.id}">-</button>
            </li>`
        }
    }    
    const cartItems = document.querySelector('#cart-items')
    cartItems.innerHTML = cartStr
}

document.body.addEventListener('click', (e) => {
    if (e.target.matches('.add-to-cart')) {
        addItemToCart(e.target.dataset.id, e.target.dataset.price)
        displayCart()
        console.log(cart)
    } else if (e.target.matches('.button-add')) {
        const name = e.target.dataset.id
        addToCart(name)
        displayCart()
    } else if (e.target.matches('.button-sub')) { 
        const name = e.target.dataset.id
        removeFromCart(name)
        displayCart()
    }
})

