const cart = ["shoes", "pant", "kurta"];

function validateCart(cart) {
  return true;
}


function createOrder(cart) {
  const pr=  new Promise(function (resolve, reject) {
    //createOrder
    //validateCart
    //orderId

    if (!validateCart(cart)) {
      const err = new Error("Card is not valid");
      reject(err);
    }

    const orderID = "12542";
    if (orderID) {
      setTimeout(() => {
        resolve(`orderID --> ${orderID}`);
      }, 5000);
    }
  });

  return pr;
}

const promise = createOrder(cart);
console.log(promise);

promise
  .then(function (orderID) {
    console.log(orderID);
    return orderID;
  })
  .catch(function (err) {
    console.log(err);
  });
