let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price){

    cart.push({
        name:name,
        price:price
    });

    localStorage.setItem("cart", JSON.stringify(cart));

    alert(name + " Added Successfully!");
}

function displayCart(){

    let cartDiv=document.getElementById("cartItems");

    if(!cartDiv) return;

    let html="";

    let total=0;

    cart.forEach((item,index)=>{

        total+=item.price;

        html+=`
        <div class="cart-card">

        <h3>${item.name}</h3>

        <p>₹${item.price}</p>

        <button onclick="removeItem(${index})">
        Remove
        </button>

        </div>
        `;

    });

    cartDiv.innerHTML=html;

    document.getElementById("total").innerHTML=total;

}

function removeItem(index){

    cart.splice(index,1);

    localStorage.setItem("cart",JSON.stringify(cart));

    location.reload();

}

function checkout(){

    alert("Order Placed Successfully 🎉");

    localStorage.removeItem("cart");

    location.reload();

}

displayCart();
function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let count = document.getElementById("cart-count");

    if(count){
        count.innerHTML = cart.length;
    }
}

updateCartCount();