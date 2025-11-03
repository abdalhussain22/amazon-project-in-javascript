import { cart, addToCart } from "../data/cart.js";
import { products } from "../data/products.js";
import { formatCurrency } from "./utils/money.js";

let productHTML = '';

products.forEach((product)=>{
    productHTML += `
        <div class="product-container">
          <div class="product-image-container">
            <img class="product-image"
              src="${product.image}">
          </div>

          <div class="product-name limit-text-to-2-lines">
            ${product.name}
          </div>

          <div class="product-rating-container">
            <img class="product-rating-stars"
              src="images/ratings/rating-${product.rating.stars * 10}.png">
            <div class="product-rating-count link-primary">
              ${product.rating.count}
            </div>
          </div>

          <div class="product-price">
            $${formatCurrency(product.priceCents)}
          </div>

          <div class="product-quantity-container">
            <select class="js-quantity-selector-${product.id}">
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div class="product-spacer"></div>

          <div class="added-to-cart js-added-to-cart-${product.id}">
            <img src="images/icons/checkmark.png">
            Added
          </div>

          <button class="add-to-cart-button button-primary js-add-to-cart" data-product-id="${product.id}">
            Add to Cart
          </button>
        </div>
    `;
});

document.querySelector(".js-products-grid").innerHTML = productHTML;

function updateCartQuantity(){
  // Calculate total number of items in the cart
    let cartQuantity = 0;
    cart.forEach((item)=>{
      cartQuantity += item.quantity;
    });

    // Update cart icon quantity display
    document.querySelector(".js-cart-quantity").innerHTML = cartQuantity;
    console.log(cart);
}

const addedMessageTimeouts = {};

function showMessageAndClearTimeOut(productId){
  // Show "Added" message temporarily
    const addedMessage = document.querySelector(`.js-added-to-cart-${productId}`);
    addedMessage.classList.add('added-to-cart-visible');
    
    // Clear any previous timeout for this product
    const previousTimeoutId = addedMessageTimeouts[productId];
    if (previousTimeoutId) {
      clearTimeout(previousTimeoutId);
    }

    // Hide the "Added" message after 2 seconds
    const timeoutId = setTimeout(()=>{
      addedMessage.classList.remove('added-to-cart-visible');
    },2000);

    // Store timeout ID for future reference
    addedMessageTimeouts[productId] = timeoutId;
}

// Add product to cart and handle cart quantity updates
document.querySelectorAll(".js-add-to-cart").forEach((button)=>{
  button.addEventListener('click',()=>{
    // Extract product ID from button data attribute
    const {productId} = button.dataset;

    // Get selected quantity for the product
    const quantity = Number(document.querySelector(`.js-quantity-selector-${productId}`).value);

    addToCart(productId,quantity);

    updateCartQuantity();

    showMessageAndClearTimeOut(productId);
  });
});