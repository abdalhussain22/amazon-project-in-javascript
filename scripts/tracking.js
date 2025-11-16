import { calculateCartQuantity, loadCartFetch } from "../data/cart.js";
import { getOrder } from "../data/orders.js";
import { getProduct } from "../data/products.js";
import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';

 async function loadPage(){

    await loadCartFetch();

     
    const url = new URL(window.location.href);
    const productId = url.searchParams.get('productId');
    const orderId = url.searchParams.get('orderId');

    const product = getProduct(productId);
    console.log(product);
    const orders = getOrder(orderId);

    let productDetails;

    orders.products.forEach((details)=>{
        if(details.productId === product.id){
            productDetails = details
        }
    })

    const trackingHTML = ` 
        <a class="back-to-orders-link link-primary" href="orders.html">
          View all orders
        </a>

        <div class="delivery-date">
          Arriving on ${dayjs(productDetails.estimateDeliveryTime).forEach('dddd, MMMM D')}
        </div>

        <div class="product-info">
          ${product.name};
        </div>

        <div class="product-info">
          Quantity: ${productDetails.quantity}
        </div>

        <img class="product-image" src="${product.image}">

        <div class="progress-labels-container">
          <div class="progress-label">
            Preparing
          </div>
          <div class="progress-label current-status">
            Shipped
          </div>
          <div class="progress-label">
            Delivered
          </div>
        </div>

        <div class="progress-bar-container">
          <div class="progress-bar"></div>
        </div>
    `

    document.querySelector(".js-order-tracking").innerHTML = trackingHTML;

    function updateCartQuantity(){
        const quantity = calculateCartQuantity();
        document.querySelector(".js-cart-quantity").innerHTML = quantity;
    }
    updateCartQuantity();
}

loadPage();