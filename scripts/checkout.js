import {renderOrderSummary} from "../scripts/checkout/orderSummary.js";
import {renderPaymentSummary} from '../scripts/checkout/paymentSummary.js';
import { renderCheckoutHeader } from "../scripts/checkout/checkoutHeader.js";
import "../data/cart-class.js";

renderOrderSummary();
renderPaymentSummary();
renderCheckoutHeader();