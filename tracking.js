setTimeout(function(){

document.getElementById("prepare").classList.remove("active");
document.getElementById("prepare").classList.add("completed");

document.getElementById("delivery").classList.add("active");

document.getElementById("status").innerHTML="🚴 Your order is out for delivery.";

},5000);

setTimeout(function(){

document.getElementById("delivery").classList.remove("active");
document.getElementById("delivery").classList.add("completed");

document.getElementById("done").classList.add("completed");

document.getElementById("status").innerHTML="🎉 Your order has been delivered successfully.";

},10000);