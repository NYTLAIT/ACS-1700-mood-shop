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
    button.dataset.id = item.name
    button.innerHTML = "Add to Cart"
    newDiv.appendChild(button)
    button.className= 'add-to-cart'
})