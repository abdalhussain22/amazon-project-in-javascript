import {renderOrderSummary} from "../scripts/checkout/orderSummary.js";
import {renderPaymentSummary} from '../scripts/checkout/paymentSummary.js';
import { renderCheckoutHeader } from "../scripts/checkout/checkoutHeader.js";
// import "../data/cart-class.js"; // we this just for practice oop
// import "../data/backend-practice.js"
import { loadsProduct ,loadProductFetch} from "../data/products.js";
import { loadCart } from "../data/cart.js";

// async await is the shortcut for promises
async function loadPage() {
    try {
        // throw 'error1'
        await loadProductFetch();

        // we can create two error; 1: throw and 2: reject()
        const value = await new Promise((resolve,reject)=>{
        // throw 'error 2'
        loadCart(()=>{
            resolve('value2');
            // reject('error 3');
        });
    })
    } catch (error) {
        console.log('unexpected error, try again.')
    }

    renderOrderSummary();
    renderPaymentSummary();
    renderCheckoutHeader();
}
loadPage()

/*
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
*/

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