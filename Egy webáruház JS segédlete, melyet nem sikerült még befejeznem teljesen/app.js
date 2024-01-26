//oldalsó menü kezelése
const hamburger = document.getElementById('hamburger') // kiválasztja azt az elemet a html-ből aminek az id-ja hamburger
const nav = document.getElementById('nav') // -------------||--------------

hamburger.addEventListener('click', function (event){
    nav.classList.toggle('menu-active') // megnézi, hogy adott elemen rajta van - e a 'menu-active' ha nincs rajta ráteszi, ha rajta van leveszi
    hamburger.classList.toggle('fi-align-justify')
    hamburger.classList.toggle('fi-arrow-left')
})

//Adattípusok:
/*
    számok: 
    const num1 = 5
    const num2 = 7

    stringek:
    const greating = 'Hoj hoj'
    
    boolean:
    const beOrNotBe = true / false;

    tömb
    const products = {'málna', 'szeder', 'alma'}

    objektum:
    const alma = {
        name: 'alma'
        picture: alma.jpg
        price: 300
    }

    let változó = 55 sima nem konstans változó, mivel nem az, ezért később string értéket is fel tud venni. DINAMIKUS típusokkal dolgozik
*/
 
//termékek beillesztése
const products = [
    {
        id: 1,
        name: 'málna',
        //picture: málna.jpg,
        price: 2000,
        inStock: true
    },
    {
        id: 2,
        name: 'szeder',
        //picture: szeder.jpg,
        price: 1500,
        inStock: true,
        variations: ['fekete', 'fehér']
    },
    {
        id: 3,
        name: 'alma',
        //picture: alma.jpg,
        price: 200,
        inStock: true
    }
]

const productsSections = document.getElementById('products');

//TODO inStock, variations

products.forEach(product => {
    //sima egyenlővel folyamatosan felülírja az innerHTML elemet, így hozzáadunk
    productsSections.innerHTML += `<div> 
        <h2>${product.name}</h2>
        <h3>${product.price} Ft</h3>  
        <a href = '#' class = 'addToCart'> Kosárba </a>
    </div>` // Új html kód rész hozzáadása    
})

//Kosár kezelés

const cart = {}

//addToCart classú elemek gyűjtése
const addToCartButtons = document.getElementsByClassName('addToCart')
const buttonCount = addToCartButtons.length
for(let i = 0; i < buttonCount; i++){
    addToCartButtons[i].addEventListener('click', function (event){
        if(cart[event.target.id] == undefined){
            cart[event.target.id] = 1;
        }else{
            cart[event.target.id]++;
        }
    })    
}

// clickEvent kosárra
const cartIcon = document.getElementById('cartIcon')
const cartItems = document.getElementById('cartItems')
let sumPrice = 0

cartIcon.addEventListener('click', function (){
    for(const id in cart){
        const currentProd = products.find(product => product.id == id)
        //console.log(id, cart[id]);
        // kosár megjelenítése
        cartItems.innerHTML += `<li>
            ${cart[id]} db - ${currentProd.price} Ft
        </li>`
        sumPrice += currentProd.price * cart[id]
    }
    cartItems.innerHTML += `<li>
        ${sumPrice} Ft
    </li>`
})


