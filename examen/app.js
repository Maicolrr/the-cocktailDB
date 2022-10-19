const options = {method: 'GET'};
const containerCarts = document.getElementById('containerCarts');
const tDrinks = document.getElementById('tDrinks');

let drinkCounter=0
window.addEventListener('DOMContentLoaded', () => {

    fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Cocktail_glass', options)
    .then(response => response.json())
    .then(data => { 
        
        //console.log(data);
        data.drinks.forEach(element => {

            drinkCounter++
            createCarts(element)
            
        });       
    })  
    tDrinks.textContent=drinkCounter

});

function createCarts(element){
    // console.log(element.strDrink);//drinkName
    // console.log(element.strDrinkThumb);//imgDrink
    // console.log(element.idDrink);//id de la bebida

    const cart = document.createElement('div')
    cart.className +="cart"

    const zoneImg = document.createElement('div')
    zoneImg.className +="zoneImg"

    const zoneInfo = document.createElement('div')
    zoneInfo.className +="zoneInfo"

    const zoneInfoName = document.createElement('div')
    zoneInfoName.className +="zoneInfoName"

    const zoneInfoId = document.createElement('div')
    zoneInfoId.className +="zoneInfoId"

    const drinkName = document.createElement('h2')
    drinkName.className +="drinkName"
    drinkName.textContent =element.strDrink

    const imgDrink = document.createElement('img')
    imgDrink.className +="imgDrink" 
    imgDrink.src =element.strDrinkThumb 

    const idDrink = document.createElement('h3')
    idDrink.className +="idDrink" 
    idDrink.textContent ="id "+ element.idDrink 

    containerCarts.appendChild(cart);
    cart.appendChild(zoneImg);
    cart.appendChild(zoneInfo);
    zoneImg.appendChild(imgDrink);
    zoneInfo.appendChild(zoneInfoName);
    zoneInfo.appendChild(zoneInfoId);
    zoneInfoName.appendChild(drinkName);
    zoneInfoId.appendChild(idDrink);

}


document.addEventListener('keyup', event =>{
    if (event.target.matches('#search')){
        document.querySelectorAll('.cart').forEach(carts =>{
            carts.textContent.toLowerCase().includes(event.target.value)
            ?carts.classList.remove('filtro')
            :carts.classList.add('filtro');
        })
    }
})