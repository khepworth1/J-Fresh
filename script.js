function addToCart(name, price) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push({ name, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${name} added to cart!`);
}
window.onload = function () {
  const cartItems = document.getElementById("cart-items");
  const totalSpan = document.getElementById("total");
  if (cartItems && totalSpan) {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    let total = 0;
    cart.forEach((item, index) => {
      const div = document.createElement("div");
      div.textContent = `${item.name} - $${item.price.toFixed(2)}`;
      cartItems.appendChild(div);
      total += item.price;
    });
    totalSpan.textContent = total.toFixed(2);
  }
};
