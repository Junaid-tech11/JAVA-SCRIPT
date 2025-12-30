// •	Day 4 & 5: The "Shopping Cart" Logic
// o	Task: List 3 items (Apple, Banana, Orange) with 
// "Add" buttons. Show a "Cart" list below. When you add an item, 
// it appears in the list and the "Total Price" updates.
// o	Key Skills: Arrays, Loops (forEach), creating HTML elements via JS (document.createElement).

let cart = [];


function addToCart(itemName,itemPrice){
    let item = {
        name: itemName,
        price:itemPrice,
    };
    cart.push(item)
    updateCartUI();
}




function updateCartUI(){
    let totalPrice = 0;

    let list = document.getElementById('cart-list');
    list.innerHTML = '';

    cart.forEach(function(item){
        let li = document.createElement('li');
        li.textContent = item.name + ' -$ ' + item.price;
        list.appendChild(li);


        totalPrice = totalPrice + item.price;
    })

    let total = document.getElementById('total-price')
    total.textContent = totalPrice

}

