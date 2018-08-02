var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
}

function viewCart() {
  // write your code here
}

function total() {
  let t = 0;
  return t;
}

function removeFromCart(item) {
    var itemInCart = false
  for(var i = 0; i < cart.length; i++){
    if (cart[i].hasOwnProperty(item)) {
      itemInCart = true;
      cart.splice(i, 1);
    }
  }
  if (!itemInCart) {
    console.log("That item is not in your cart.");
  }
  return cart
}

function placeOrder(cardNumber) {
    if (!creditCard) {
    console.log("We don't have a credit card on file for you to place your order.");
  } else {
    console.log("Your total cost is $" + total() + ", which will be charged to the card " + creditCard + ".");
    cart = [];
  }
}
