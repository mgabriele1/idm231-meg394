// Function code

let name = 'Mel';

function doSomething(price, howMany) {
    let total = 0;
    total = price * howMany;
    console.log(`Good day ${name}, your total is ${total}`);
}

//doSomething();

function getTotal(subtotal, sales_tax, shipping) {
  var service_fee = .15;
  var tax         = subtotal * sales_tax;
  var total       = subtotal + tax + shipping;
  var fee         = total * service_fee;

  total = total + fee;
  return total;
console.log(total);
}

var total = '$' + getTotal(21, .06, 8);
