import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { loadProducts, loadProductsFetch } from "../data/products.js";

// import "../data/cart-class.js";
// import "../data/backend-practice.js";

async function loadPage() {
  console.log("load page");
  await loadProductsFetch();

  await new Promise((resolve) => {
    loadCart(() => {
      resolve();
    });
  });

  return "value2";
}

// loadPage().then((value) => {
//   console.log("next step");

//   loadProducts()
//   console.log(value);
// });

// new Promise((resolve) => {
//   loadProducts(() => {
//     resolve();
//   });
// }).then(() => {
//   renderOrderSummary();
//   renderPaymentSummary();
// });

// loadProducts(() => {
//   renderOrderSummary();
//   renderPaymentSummary();
// });
