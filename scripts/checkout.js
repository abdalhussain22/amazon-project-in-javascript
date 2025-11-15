import {renderOrderSummary} from "../scripts/checkout/orderSummary.js";
import {renderPaymentSummary} from '../scripts/checkout/paymentSummary.js';
import { renderCheckoutHeader } from "../scripts/checkout/checkoutHeader.js";
// import "../data/cart-class.js"; // we this just for practice oop
// import "../data/backend-practice.js"
import { loadsProduct ,loadProductFetch} from "../data/products.js";
import { loadCart } from "../data/cart.js";

// promise.all let us run multiple promises at the same time.
Promise.all([
    loadProductFetch(),
    new Promise((resolve)=>{
        loadCart(()=>{
            resolve('value2');
        });
    })
]).then((value)=>{
    console.log(value);
    renderOrderSummary();
    renderPaymentSummary();
    renderCheckoutHeader();
})

/*
// we should promises instead of callback due to indentation
// run each promise separately
new Promise((resolve)=>{
    loadsProduct(()=>{
        resolve("value1");
    });

}).then((value)=>{
    console.log(value);
    return new Promise((resolve)=>{
        loadCart(()=>{
            resolve();
        });
    })

}).then(()=>{  
        renderOrderSummary();
        renderPaymentSummary();
        renderCheckoutHeader();
})
*/

/*
loadsProduct(()=>{
    loadCart(()=>{
        renderOrderSummary();
        renderPaymentSummary();
        renderCheckoutHeader();
    })
})

*/