const cart = ["shoes", "jeans", "shirt", "tops", "tees"];

/* createOrder(cart, function (orderId) {
  preoccedToPayment(orderId, function (paymentInfo) {
    showOrderSummary(paymentInfo, function () {
      updateWalletBalnce();
    });
  });
}); //callback --> passing function
 */

/* =================================================== */

/* const promise = createOrder(cart);
//{data: undefined}

promise
  .then(function (orderId) {
    preoccedToPayment(orderId);
  })
  .then(function (paymentInfo) {
    showOrderSummary(paymentInfo);
  })
  .then(function () {
    updateWalletBalnce();
  }); //Promise --> attaching function */

/* ================================================================= */

const URL = "https://github.com/pranjal8?tab=repositories";

const user = fetch(URL, { mode: "no-cors" });
console.log(user);

user
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
